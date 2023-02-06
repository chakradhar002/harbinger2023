var http=require("http");
//create server
http.createServer(function(request,response){
//send http header
//HTTP Status 200:OK
//Content type:text/plain
response.writeHead(200,{'Content-Type':'text/plain'});
response.end("How are you?");

}).listen(4200);
console.log("Server started at 4200");
console.log("Running server at 127.0.0.1:4200");