var mysql=require('mysql');
 
/**
 * description connection
 */
var connection=mysql.createConnection({
   host:'localhost',
   user:'root',
   password:'password',
   database:'flight_database'
 });

connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Database Connected!:)');
   }
 });  

 
/**
 * Exporting 
 */


module.exports = connection; 