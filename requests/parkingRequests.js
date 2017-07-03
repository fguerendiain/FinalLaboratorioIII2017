function CrateParking(reqLicense, reqAlien, reqColour, reqModel, reqBrand, reqPlace){
    var resp = "El servidor no responde, Intente nuevamente o comuniquese con el administrador del sistema";
    var token = CurrentSession();
    data = {
        license : reqLicense,
        alien : reqAlien,
        colour : reqColour,
        model : reqModel,
        brand : reqBrand,
        place : reqPlace
    };
    var parkingInfo = RequestToServer('/parking','POST',token,data,false);
    if(parkingInfo == null){
        return resp;
    }
    return alert("Se agrego el usuario");

}


function GetAllParking(currentSession){

}


function GetParkingById(id){
    var resp = "El servidor no responde, Intente nuevamente o comuniquese con el administrador del sistema";
    var token = CurrentSession();
    var parkingInfo = RequestToServer('/parking/'+id,'GET',token,data,false);
    if(parkingInfo == null){
        return resp;
    }
    return generateParkingInfoBox(parkingInfo);
}

function OutParkingById(id){
    alert(id);
    var resp = "El servidor no responde, Intente nuevamente o comuniquese con el administrador del sistema";
    var token = CurrentSession();
    var parkingInfo = RequestToServer('/parking/'+id,'PUT',token,data,false);
    if(parkingInfo == null){
        return resp;
    }
    return generateParkingOutBox(parkingInfo);
}

function UpdateParkingById(currentSession, changedata, id, license, alien, colour, model, brand, place){

}