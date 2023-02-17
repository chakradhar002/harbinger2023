var mysql = require('mysql');

var con = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database:"isha"
  
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT * FROM customers", function (err, result) {
    if (err) throw err;
     console.log("records selected");
     console.log(result);
    });
});