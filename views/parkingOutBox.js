function generateParkingOutBox(parking){
    if(parking == null)return;

    var elapsedTime = parking.intime - parking.outtime;
    var price = parking.price/100;

    var htmlTableParkedVehicles = "<table class='table'>\
                                        <tr>\
                                            <th>EGRESO</th>\
                                            <th>TIEMPO</th>\
                                            <th>IMPORTE</th>\
                                        </tr>";

    htmlTableParkedVehicles += "<tr data-valor="+parking.parkingid+" class='priceBox  trHover' >\
                                    <td>"+FormatTime(parking.outtime)+"</td>\
                                    <td>"+FormatTime(elapsedTime,true)+"</td>\
                                    <td>$ "+price+".-</td>\
                                </tr>";
    

    htmlTableParkedVehicles+="</table>";

    return htmlTableParkedVehicles;
}