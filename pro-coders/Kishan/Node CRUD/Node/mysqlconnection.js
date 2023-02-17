var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port:3306,
  user: "root",
  password: "Test_1234"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE dbNode", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});