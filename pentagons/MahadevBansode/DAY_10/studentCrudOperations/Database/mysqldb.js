/**
 * mysqldb file has the database connections required for 
 */
const mysql = require("mysql");

/**
 * @description creates database connection 
 */

let connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Test_1234",
  database: "harbinger",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected Successfully...!");
});

module.exports = con;
