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
/*

    "id": "11",
COCHERA    "place": "9",
PATENTE    "license": "KDO876",
    "alien": "0",
COLOR    "colour": "negro",
MODELO    "model": "Agile",
MARCA    "brand": "Chevrolet",
    "inuser": "2",
    "outuser": "12",
INGRESO    "intime": "1498072005",
    "outtime": "1498849492",
    "price": "157000

INGRESO    "intime": "1498072005",
MARCA    "brand": "Chevrolet",
MODELO    "model": "Agile",
COLOR    "colour": "negro",
PATENTE    "license": "KDO876",
COCHERA    "place": "9",


*/