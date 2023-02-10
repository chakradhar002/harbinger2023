const mysql = require("mysql2");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Test_1234",
  database: "student",
});

con.connect((err) => {
  if (err) throw err;

  console.log(`Database is connected successfully.`);
});

module.exports = { con };
