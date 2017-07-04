function CrateParking(reqLicense, reqAlien, reqColour, reqModel, reqBrand, reqName, reqFloor){
    var resp = "El servidor no responde, Intente nuevamente o comuniquese con el administrador del sistema";
    var token = CurrentSession();
    var data = {
        'license' : reqLicense,
        'alien' : reqAlien,
        'colour' : reqColour,
        'model' : reqModel,
        'brand' : reqBrand,
        'name' : reqName,
        'floor' : reqFloor
    };
   
    var parkingInfo = RequestToServer('/parking','POST',token,data,false);
    if(parkingInfo == null || parkingInfo == false){
        return resp;
    }
    return true;

}


function GetAllParking(currentSession){

}


function GetParkingById(id){
    var resp = "El servidor no responde, Intente nuevamente o comuniquese con el administrador del sistema";
    var token = CurrentSession();
    var parkingInfo = RequestToServer('/parking/'+id,'GET',token,'',false);
    if(parkingInfo == null){
        return resp;
    }
    return generateParkingInfoBox(parkingInfo);
}

function OutParkingById(id){
    alert(id);
    var resp = "El servidor no responde, Intente nuevamente o comuniquese con el administrador del sistema";
    var token = CurrentSession();
    var parkingInfo = RequestToServer('/parking/'+id,'PUT',token,'',false);
    if(parkingInfo == null){
        return resp;
    }
    return generateParkingOutBox(parkingInfo);
}

function UpdateParkingById(currentSession, changedata, id, license, alien, colour, model, brand, place){

}