

/*
 * Obtien el valor de token del localStorage, si no existe retorna false
 * */
function CurrentSession(){
    var token = localStorage.getItem('token');
    if(token != null){
        return token;
    }
    return false;
}

/*
 * Obtien el valor de username del localStorage, si no existe retorna false
 * */
function CurrentUserName(){
    var username = localStorage.getItem('username');
    if(username != null){
        return username;
    }
    return false;
}

/*
 * Elimina token y username de localstorage
 * */
function ClearLocalStorageSessionData(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
}

/*
 * Envia los datos de login al servidor y retorna una session o un mensage
 * */
function CreateSession(user, pass){
    var resp = "El servidor no responde, Intente nuevamente o comuniquese con el administrador del sistema";
    data = {username : user, password : pass};
    var session = RequestToServer('/session','POST','header',data,false);
    if(session){
        if(session.message != null){
            resp = session.message;
        }else{
            localStorage.setItem('token',session.token);
            localStorage.setItem('username',session.username);
            resp = 1;
        }
    }
    return resp;
}

/*
 * Consulta al servidor si la session guardada es valida
 * */
function VerifySession(){
    var resp = "El servidor no responde, Intente nuevamente o comuniquese con el administrador del sistema";
    var token = CurrentSession();
    data = {'vacio': '0'};
    var validSession = RequestToServer('/session','GET',token,data,false);
    if(validSession){
        if(validSession.message != null){
            resp = validSession.message;
        }
        resp = true;
    }
    return resp;
} 

/*
 * Redirecciona a la pagina indicada
 * */
function RedirectTo(url){
    window.location.href = url;

}