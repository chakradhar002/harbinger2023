var http = require('http')
var fs = require('fs')
http.createServer(function(request,response){
    fs.readFile('Assignment_1.html',function(err,data){
        response.writeHead(200,{'Content-type':'text/html'});
        response.write(data);
        response.end("THE END !");
    
    });
}).listen(8084);
