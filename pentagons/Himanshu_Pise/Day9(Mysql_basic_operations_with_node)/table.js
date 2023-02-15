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
  con.query("CREATE TABLE customer (name VARCHAR(255), address VARCHAR(255))", function (err, result) {
    if (err) throw err;
    console.log("Table  created");
  });
});