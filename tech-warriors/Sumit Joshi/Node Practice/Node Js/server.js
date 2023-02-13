var http = require("http")

const hello = http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'})
    res.end('Hello')
});

hello.listen(4000,()=>{
    console.log("listening at sever http://localhost:4000/");
})
