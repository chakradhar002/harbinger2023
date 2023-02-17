var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password'
  
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE isha", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});