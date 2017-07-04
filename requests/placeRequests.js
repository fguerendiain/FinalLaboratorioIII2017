function GetAllPlace(includeInactive){
    var resp = "El servidor no responde, Intente nuevamente o comuniquese con el administrador del sistema";
    var token = CurrentSession();
    var url = '/place';
    if(includeInactive){
        url+='?includeinactive=true';
    }
    var placeList = RequestToServer(url,'GET',token,'',false);
    if(placeList == null){
        return resp;
    }
    return generatePlaceList(placeList);
}


function CratePlace(currentSession, name, floor){

}


function GetPlaceById(id){
    var resp = "El servidor no responde, Intente nuevamente o comuniquese con el administrador del sistema";
    var token = CurrentSession();
    var url = '/place/';
    var placeList = RequestToServer(url+id,'GET',token,'',false);
    if(placeList == null){
        return false;
    }
    return placeList;
}


function UpdatePlaceById(currentSession, id, name, floor, handicap, active){

}


function DeletePlace(currentSession, id){

}

function GetNamePlaceById(place){
    auxPlace = GetPlaceById(place);
    if(auxPlace == null || auxPlace == false){
        return null;
    }
    return auxPlace.name;
}

function GetNameFloorById(place){
    auxPlace = GetPlaceById(place);
    if(auxPlace == null || auxPlace == false){
        return null;
    }
    return auxPlace.floor;
}
