function RequestToServer(serverUrl, methodType, data, contentType)
{
       $.ajax({
        url:serverUrl,
        type:methodType,
        data: JSON.stringify(data),
        contentType: "application/json",
    })
 //armar una consulta ajax donde los datos pasados por parametro completen los datos del request
}