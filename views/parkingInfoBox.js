function generateParkingInfoBox(parking){
    if(parking == null)return;

    var htmlTableParkedVehicles = "<table class='table'>\
                                        <tr>\
                                            <th>INGRESO</th>\
                                            <th>MARCA</th>\
                                            <th>MODELO</th>\
                                            <th>COLOR</th>\
                                            <th>PATENTE</th>\
                                            <th>PISO</th>\
                                            <th>COCHERA</th>\
                                        </tr>";

    htmlTableParkedVehicles += "<tr data-valor="+parking.parkingid+" class='infobox trHover' >\
                                    <td>"+FormatTime(parking.intime)+"</td>\
                                    <td>"+parking.brand+"</td>\
                                    <td>"+parking.model+"</td>\
                                    <td>"+parking.colour+"</td>\
                                    <td>"+parking.license+"</td>\
                                    <td>"+parking.floor+"</td>\
                                    <td>"+parking.placename+"</td>\
                                </tr>";
    

    htmlTableParkedVehicles+="</table>";

    return htmlTableParkedVehicles;
}