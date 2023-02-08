var http = require('http');
var fs = require('fs');
var express = require('express');
const bodyParser = require('body-parser')
var app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/',function(req,res){
res.send('hello world')

})

app.post('/mydatapost',function(req,res){

    let request = req.body;
    res.send('Data Received: '+JSON.stringify(request));
    console.log(JSON.stringify(request));
    
    }).listen(8080)
    


    


