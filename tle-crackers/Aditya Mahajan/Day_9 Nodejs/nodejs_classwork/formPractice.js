var express = require('express')
var app = express()
var bodyparser = require('body-parser')

var urlencodedParser = bodyparser.urlencoded({extended:false})

app.use(express.static('public'))
app.get('/formPractice.html',function(req,res){
    res.sendFile(__dirname+"/"+"formPractice.html")
})

app.post('/post_process',urlencodedParser,function(req,res){
    response = {
        first_name : req.body.first_name,
        last_name : req.body.last_name
    };
    console.log(response);  
    res.end(JSON.stringify(response));  
})
var server = app.listen(8082, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})  