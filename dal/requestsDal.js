const SERVER = 'http://francoguerendiain.esy.es';

function RequestToServer(serverUrl, methodType, headerToken, reqData, asynchronous)
{
    var response;

    $.ajax({
        type:methodType,
        url:SERVER+serverUrl,
        headers: {'token' : headerToken},
        data: reqData,
        dataType: "json",
        async: asynchronous
    })
    .done(function(respData){
        response =  respData;
        alert("requestsDal.js = Ajax.done response = "+JSON.stringify(respData));
    })
    .fail(function(){
        alert("requestsDal.js = Ajax.fail");
        response =  false;
    });

    return response;

}

function FormatTime(unixTimestamp,soloHora = false) {
    var dt = new Date(unixTimestamp * 1000);

    var year = dt.getUTCFullYear();
    var month = dt.getUTCMonth() + 1;
    var day = dt.getUTCDate();
    var hours = dt.getHours();
    var minutes = dt.getMinutes();

    // the above dt.get...() functions return a single digit
    // so I prepend the zero here when needed
    if (hours < 10) 
     hours = '0' + hours;

    if (minutes < 10) 
     minutes = '0' + minutes;
    if(soloHora){
        return hours + ":" + minutes + "Hs";
    }
    return day + "/" + month + "/" + year + " - " + hours + ":" + minutes + "Hs";

}       
