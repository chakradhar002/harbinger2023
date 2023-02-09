var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "test_1234",
  database: "studentDb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE students (name VARCHAR(255), stram VARCHAR(255) ,rollnumber varchar(5))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});