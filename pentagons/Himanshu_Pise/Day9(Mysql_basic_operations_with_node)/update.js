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
  con.query("UPDATE customer SET address = 'Canyo 123' WHERE address = 'Valley 345'", function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});