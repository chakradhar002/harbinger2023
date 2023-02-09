var mysql = require('mysql2');
//
/**
 * @author: Anushree Gore
 * @description: Db connection
 */
var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Test_1234',
    database: 'student',
});

con.connect(function(error){
    if(!!error){
      console.log(error);
    }else{
      console.log('Connected!');
    }
  });  
 module.exports = con; 
