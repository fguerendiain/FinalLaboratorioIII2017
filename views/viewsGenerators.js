function loadUserGreeting(){
    $('.userLoginInfo').html('Usuario: '+ CurrentUserName());
}

function loadParkedVehicles(){
    var parkedVehicles = GetParkedVehicles();
    if(parkedVehicles){
        $('.vehicleDinamicTable').html(parkedVehicles);
    }
}

function loadNonTakenPlaces(){
    var placeList = GetAllPlace();
    if(placeList){
        $('.cmbCochera').html(placeList);
    }
}