var http = require('http')
var fs = require('fs')
http.createServer(function (req, res) {
    fs.readFile('data.html', function (err, data) {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(data);
        return res.end();
        console.log(`process architecture ${process.arch}`);
        console.log(`process PID ${process.pid}`);
        console.log(`process platform ${process.platform}`);
        console.log(`process version ${process.version}`);
    });
}).listen(8000);

console.log("Server started");
console.log("listening at sever http://localhost:8000/");


