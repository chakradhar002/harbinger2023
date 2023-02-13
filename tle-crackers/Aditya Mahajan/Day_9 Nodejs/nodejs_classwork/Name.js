var express = require('express')
var app = express();
// importing required express dependency
var bodyparser = require('body-parser');
// used to process data sent in an HTTP request body
var urlencodedParser = bodyparser.urlencoded({ extended: false })
// parse the incoming request with urlencoded payloads and is based upon the body-parser
// app.use(bp.urlencoded({extended: true}) does the same for URL-encoded requests. 
// the extended: true precises that the req.body object will contain values of any type 
// instead of just strings.

app.use(express.static('public'))
//Static files are files that clients download as they are from the server. 
// Create a new directory, public. Express, by default does not allow you to serve static files. 
// You need to enable it using the following built-in middleware.
app.get('/Name.html', function (req, res) {
    res.sendFile(__dirname + "/" + "Name.html");
})
app.post('/process_post', urlencodedParser, function (req, res) {
    // Prepare output in JSON format  
    var first_name = parseInt(req.body.first_name);
    var last_name = parseInt(req.body.last_name);
    var sum = first_name + last_name;
    response = sum;
    console.log(response);
    res.end(JSON.stringify(response));
})

var server = app.listen(8082, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})  