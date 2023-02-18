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
  var sql ="INSERT INTO students (name, stram ,rollnumber) VALUES ('Surbhi', 'MCA' , '22')";
   //"INSERT INTO students (name , stream , rollNumber) VALUES ('surbhi','MCA','22)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Record Inserted");
  });
});