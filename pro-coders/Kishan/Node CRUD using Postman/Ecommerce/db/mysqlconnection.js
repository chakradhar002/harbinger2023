var mysql=require('mysql');
/**
 * @description Connection object
 */
var connection=mysql.createConnection({
   host:'localhost',
   port:3306,
   user:'root',
   password:'Test_1234',
   database:'dbnode'
 });
 
 /**
  * @description connect method 
  */
connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Connected!:)');
   }
 });  
 
module.exports = connection; 