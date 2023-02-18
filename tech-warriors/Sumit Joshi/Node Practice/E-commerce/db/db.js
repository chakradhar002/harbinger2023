var mysql = require('mysql2')
var connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "root",
    database : "student"
})

connection.connect(function(error){
    if(error) throw error;
    console.log('connected');
})

module.exports = {connection}