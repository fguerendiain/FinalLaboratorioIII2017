function generatePlaceList(places){
    if(places == null)return;

    var htmlTableParkedVehicles = "<select id='selectedPlace'>";

    for(var i=0; i<places.length; i++){
        
        htmlTableParkedVehicles += "<option value="+places[i].id+">"+places[i].floor+" - "+places[i].name;
        if(places[i].handicap == '1'){
            htmlTableParkedVehicles +=" (Discap.)";
        }
        htmlTableParkedVehicles +="</option>";
    }

    htmlTableParkedVehicles+="</select>";

    return htmlTableParkedVehicles;
}