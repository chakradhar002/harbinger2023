var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Test_1234",
  port:3306,
  database:"ankita"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql="CREATE TABLE details (name VARCHAR(20), address VARCHAR(100))";
  con.query(sql,function (err,result){
    if(err) throw err;
    console.log("Table Created");
  });
});