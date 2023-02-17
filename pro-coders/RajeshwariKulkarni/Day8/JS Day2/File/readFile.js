var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    fs.readFile('readFile.html',function(err,data){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data.toLocaleString());
        res.end();
    });
}).listen(2000, ()=>console.log("running at port 2000"));