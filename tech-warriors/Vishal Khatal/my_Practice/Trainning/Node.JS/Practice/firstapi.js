var express = require('express');
 var app = express();
  app.get('/',function(req,res){
    res.send("Hello how are you ?");
  })
  app.post('/',function(req,req){
    req.body

  })

  var server = app.listen(8082,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Done ! http:%s:%s " ,host,post);
  })