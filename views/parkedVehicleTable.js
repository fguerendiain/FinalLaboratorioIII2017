function generateParkedVehicleTable(vheicles){
    if(vheicles == null)return;

    var htmlTableParkedVehicles = "<table class='table'>\
                                        <tr>\
                                            <th>PATENTE</th>\
                                            <th>COCHERA</th>\
                                            <th>PISO</th>\
                                        </tr>";

    for(var i=0; i<vheicles.length; i++){
        
    htmlTableParkedVehicles += "<tr data-valor="+vheicles[i].parkingid+" class='clickOnTable trHover' >\
                                    <td>"+vheicles[i].license+"</td>\
                                    <td>"+vheicles[i].placename+"</td>\
                                    <td>"+vheicles[i].floor+"</td>\
                                </tr>";
    }

    htmlTableParkedVehicles+="</table>";

    return htmlTableParkedVehicles;
}