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
  con.query("INSERT INTO customer (name, address) VALUES ('Company Inc', 'Highway 377'),('Stark Corp.','Neyork high'),('avengers','konoha')", function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows+" Records Inserted")

  });
});