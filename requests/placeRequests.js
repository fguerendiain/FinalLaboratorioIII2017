function GetAllPlace(includeInactive){
    var resp = "El servidor no responde, Intente nuevamente o comuniquese con el administrador del sistema";
    var token = CurrentSession();
    var url = '/place';
    if(includeInactive){
        url+='?includeinactive=true';
    }
    alert(url);
    var placeList = RequestToServer(url,'GET',token,'',false);
    if(placeList == null){
        return resp;
    }
    return generatePlaceList(placeList);
}


function CratePlace(currentSession, name, floor){

}


function GetPlaceById(currentSession, id){

}


function UpdatePlaceById(currentSession, id, name, floor, handicap, active){

}


function DeletePlace(currentSession, id){

}