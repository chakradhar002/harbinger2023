// var express = require('express')
// var http = require('http')
// var connection = require('../nodejs/DBconn.js')
// var mysql = require('mysql')
// var app = express();

// var con = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "root",
//     database: "nodejs"
// });

// con.connect(function (err) {
//     if (err) throw err;
//     console.log("connected");
// })


// app.get('/emplist', function (req, res) {
//     con.query("select * from customers", function (err, result) {
//         if(err) throw err;
//         res.send(result);
//     })
// })

// var server = app.listen(8082, function () {
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log("done ! %s %s", host, port);
// });



const connection = require('../nodejs/mydb/DBconn')

