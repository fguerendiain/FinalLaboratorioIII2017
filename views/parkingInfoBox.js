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