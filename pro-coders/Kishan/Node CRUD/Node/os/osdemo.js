const os=require('os');
var http=require('http');
var fs=require('fs');
const { fstat } = require('fs');
http.createServer(function(req,res){

    fs.readFile('../data.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.write(data);
        return res.end();
    })
}).listen(8021);
console.log('Server strted');
console.log('Server strted',os.loadavg());
console.log(os.freemem());
console.log(os.tmpdir());

