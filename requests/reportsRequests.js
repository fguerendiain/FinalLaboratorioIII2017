

function GetUserLoginInfo(currentSession, id){

}


function GetUserOperationsInfo(currentSession, id){

}


function GetPlaceMaxMinNoneUseInfo(currentSession){

}


function GetParkedVehicles(currentSession){
    var resp = "El servidor no responde, Intente nuevamente o comuniquese con el administrador del sistema";
    var token = CurrentSession();
    data = {'vacio': '0'};
    var parkedVehicles = RequestToServer('/report/parked','GET',token,data,false);
    if(parkedVehicles){
        if(parkedVehicles.message != null){
            alert(parkedVehicles.message);
            resp = false;
        }
        resp = generateParkedVehicleTable(parkedVehicles[0]);
    }
    return resp;
}