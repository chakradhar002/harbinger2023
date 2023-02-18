var http=require('http');
var os=require('os');
http.createServer(function(request,response){
    fs.readFile('data.html',function(err,data){
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write(data);
        return response.end();
    });
}).listen(8082);

console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());