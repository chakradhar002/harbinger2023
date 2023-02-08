var express = require('express');

var app = express();


 // wrote api for hello world

app.get('/',function(req,res){

  res.send("hello how r u");


})

var server = app.listen(8081,function(){

    var host = server.address().address;

    var port = server.address().port;
  console.log(" app is listending      http:%s:%s" ,host,port);

})





