const { connect } = require('http2');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : 'root',
    database : "myharbinger"
});

connection.connect(function(error){
    if(error) throw error;
    console.log('connected to database. ');
});

module.exports = connection;