var http=require("http");
/**
 * @description create server at port number 4200
 */
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('hii how you?');
}).listen(4200);
console.log("Server is started at 4200")
console.log("Server is running on http:127.0.0.1/4200/");