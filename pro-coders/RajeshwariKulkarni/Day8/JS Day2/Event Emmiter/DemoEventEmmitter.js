var http = require('http')
var fs = require('fs')

http.createServer(function(req,res){
    
    // Create server and read file and return content
    fs.readFile('data1.html',function(err,data){
        


        

        // app.post('filepath',function(req,res)) - code after this line is know as "End-Point"
    })
}).listen(8080);