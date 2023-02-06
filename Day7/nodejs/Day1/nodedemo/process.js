const os=require('os'); 
var http = require("http");

http.createServer(function (req, res) {
   

    //Open a file on the server and return its content:
 
    fs.readFile('data.html', function(err, data) {
   
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

console.log('server is running listening at 8080')
console.log(`Process Architecture: ${process.arch}`);  
console.log(`Process PID: ${process.pid}`);  
console.log(`Process Platform: ${process.platform}`);  
console.log(`Process Version: ${process.version}`);  