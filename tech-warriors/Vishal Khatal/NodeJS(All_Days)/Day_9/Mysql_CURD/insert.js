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
    console.log("Connected!");
    var sql = "INSERT INTO customers (name, address) VALUES ?";
    var values = [
      ['vishal', 'katraj'],
      ['Aditya Mahajan','karve nagar'],
    ];
    con.query(sql, [values], function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
  });