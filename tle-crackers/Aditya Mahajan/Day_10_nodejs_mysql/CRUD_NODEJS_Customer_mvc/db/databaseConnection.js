/**
 * 
 * @author Aditya Mahajan
 * 
 */


// importing dependencies 
var mysql = require('mysql')

// setting up connection between database and nodejs
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: "root",
    password: "root",
    database: "nodejs"
});

// checking connection

connection.connect(function (error) {
    if (error) throw error;
    console.log('Connected!:)');

});

module.exports = connection;

