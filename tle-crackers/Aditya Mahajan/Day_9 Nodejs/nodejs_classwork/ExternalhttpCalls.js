var http = require('http')
var  path = require('path');

http.request({
    host:'www.google.com',
    method:'GET',
    path:'/'
},function(response){
    response.setEncoding('utf8'),
    response.on("readable",function(){
        console.log(response.read());
    });
}).end();
