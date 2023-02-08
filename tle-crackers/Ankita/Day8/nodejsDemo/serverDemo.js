var http = require('http');

http.createServer(function(req,res){
res.write("Hello world");
res.end();
}).listen(3000)
console.log("server is listening on 3000")