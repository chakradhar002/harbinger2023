var http=require("http");
var fs=require('fs');
http.createServer(function(req,res){
   
    fs.readFile('data.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.write(data);
        return res.end();
    })
    
    
}).listen(4200);
console.log("Server is started at 4200")
console.log("Server is running on http:127.0.0.1/4200/");