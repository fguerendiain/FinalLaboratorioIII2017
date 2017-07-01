$(document).ready(function(){
    
    /*
     *  Si hay un nombre de usuario en el localStorage
     *  lo carga en el campo de usuario
    */
    var shownName = CurrentUserName()
    if(shownName){
        $('#txtUserName').val(CurrentUserName());
    }
    
    $('#btnLogIn').click(function(){
        var usarname = $('#txtUserName').val();
        var password = $('#txtPassword').val();
        session = CreateSession(usarname,password);
        if(session != true){
            alert(session);
            ClearLocalStorageSessionData();
            return;
        }
        RedirectTo('./index.html');
    });

});