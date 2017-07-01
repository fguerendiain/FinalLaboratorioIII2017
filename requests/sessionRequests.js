const SERVER = 'http://francoguerendiain.esy.es/';


function CurrentSession(){
    var token = localStorage.getItem('token');
    if(token != null){
        return token;
    }
    return false;
}


function CurrentUserName(){
    var username = localStorage.getItem('username');
    if(username != null){
        return username;
    }
    return false;
}


function ClearLocalStorageSessionData(){
    localStorage.removeItem('token');
    localStorage.removeItem('username');
}


function CreateSession(user, pass){
    data = {username : user, password : pass};
    var session = RequestToServer(SERVER+'session','POST',data,false);
    if(session){
        if(session.error != null){
            return session.error;
        }else{
            localStorage.setItem('token',session.token);
            localStorage.setItem('username',session.username);
            return true;
        }
    }
    return "El servidor no responde, Intente nuevamente o comuniquese con el administrador del sistema";
}


function VerifySession(){
    token = CurrentSession();
    var validSession = RequestToServer(SERVER+'session','GET',token);
    if(validSession){
        if(validSession.mensaje != null){
            return validSession.mensaje;
        }
        return true;
    }
    return "El servidor no responde, Intente nuevamente o comuniquese con el administrador del sistema";
} 


function VerifyCurrentSession(){
    var validSession = VerifySession(); 
    if(validSession != CurrentSession()){
            alert(validSession);
            return false;
    }
    return true;
}

function RedirectTo(url){
    window.location.replace(url);
}