var http = require('http')
const square = http.createServer(function(req,res){
    let a,b
    res.writeHead(200,{'content-type':'number'})
    res.end(a*b)
}).listen(8000);

console.log("Server started");
console.log("listening at sever http://localhost:8000/");
