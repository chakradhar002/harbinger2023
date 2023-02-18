var mysql = require('mysql2')
var connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:"root",
    password:"Test_1234",
    database:"ankita22"
});

connection.connect(function(error){
    if(error) throw error;
      console.log('Connected!:)');
    
  });  
  
 module.exports = {connection}; 