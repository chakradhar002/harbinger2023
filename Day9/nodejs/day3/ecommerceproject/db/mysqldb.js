  var mysql=require('mysql');
 var connection=mysql.createConnection({
   host:'localhost',
   port:3306,
   user:'root',
   password:'root',
   database:'nodejs'
 });
connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Connected!:)');
   }  
 });  
module.exports = connection; 