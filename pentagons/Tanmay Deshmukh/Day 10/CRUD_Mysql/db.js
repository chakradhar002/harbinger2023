var mysql=require('mysql');
 
/**
 * description connection
 */
var connection=mysql.createConnection({
   host:'localhost',
   user:'root',
   password:'password',
   database:'harbinger'
 });

connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Connected!:)');
   }
 });  

module.exports = connection; 