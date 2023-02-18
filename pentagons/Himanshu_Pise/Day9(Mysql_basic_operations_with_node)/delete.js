var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "harbinger"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "DELETE FROM customer WHERE name = 'avengers',address = 'konoha'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
  });
});