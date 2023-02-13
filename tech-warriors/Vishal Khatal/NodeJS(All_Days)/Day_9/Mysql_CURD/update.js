var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  port:3306,
  user: "root",
  password: "Test_1234",
  database: "myherbinger"
});
con.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE vishal SET name = 'dibya' WHERE name = 'Deepa M'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });