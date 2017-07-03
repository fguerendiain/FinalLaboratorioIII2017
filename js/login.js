$(document).ready(function(){
    
    /*
     *  Si hay un nombre de usuario en el localStorage
     *  lo carga en el campo de usuario
    */
    var shownName = CurrentUserName()
    if(shownName){
        if(shownName != 'undefined'){
            $('#txtUserName').val(CurrentUserName());
        }else{
            ClearLocalStorageSessionData();
        }
    }
    
    
    $('#btnLogIn').click(function(){
        var usarname = $('#txtUserName').val();
        var password = $('#txtPassword').val();
        var session = CreateSession(usarname,password);
        if(session == 1){
            RedirectTo('./index.html');
        }else{
            alert(session);
            ClearLocalStorageSessionData();
        }
    });
});