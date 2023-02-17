var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "harbinger"

});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("SELECT * FROM customer", function (err, result, fields) {
    if (err) throw err;
     console.log("Table Data: \n",result);
  });
});