const mysql = require("mysql2");

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Test_1234",
  database: "flight_database",
});

let query1 = "select * from address";

con.connect((err) => {
  if (err) throw err;

  console.log(`\nApplication is connected to MySQL database\n`);

  con.query(query1, (err, data) => {
    if (err) throw err;
    // console.log(data);
  });
});

module.exports = { con };
