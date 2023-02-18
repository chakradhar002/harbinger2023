var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Test_1234",
  database: "myHerbinger"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM vishal", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});