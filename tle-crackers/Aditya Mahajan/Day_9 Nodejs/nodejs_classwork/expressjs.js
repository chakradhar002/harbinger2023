var express = require('express');
var app = express();


// wrote api for hello world
app.get('/swapping', function (req, res) {
    let a = 12;
    let b = 24;
    [a, b] = [b, a]
    //res.send("After swapping => "+a+" "+b);
    res.status(200).json(a + " " + b);
    console.log(process.exit(1));

})

var server = app.listen(8082, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("done ! %s %s", host, port);
});
