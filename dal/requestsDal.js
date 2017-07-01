function RequestToServer(serverUrl, methodType, reqData, asynchronous)
{
    var response;

       $.ajax({
        type:methodType,
        url:serverUrl,
        data: reqData,
        dataType: "json",
        async: asynchronous
    })
    .done(function(respData){
        response =  respData;
    })
    .fail(function(){
        response =  false;
    });

    return response;

}

