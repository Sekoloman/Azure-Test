var http = require('http');
http.createServer(function(request,response){
    console.log(request.url);
    response.write(request.url+"Bu bir azure web uygulamasi testidir!!!");
    response.end();
}).listen(3000);