var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    fs.readFile('form.html',function(err,data){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        res.end();
    })
}).listen(2000,()=>{
    console.log('Server Running on port 2000');
})


// Notes :
// You have to install  (npm install --save body-parser multer) this package
// this package is used to pars the JSOn and url-encoding 
// this package is also used for parsing multiple form data 