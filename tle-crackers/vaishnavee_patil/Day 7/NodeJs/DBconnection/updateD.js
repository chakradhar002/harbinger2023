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
  con.query("UPDATE customers SET address = 'pune city' WHERE address = 'rohit'", function (err, result) {
    if (err) throw err;
     console.log("records update"); 
     console.log(result);
    });
});