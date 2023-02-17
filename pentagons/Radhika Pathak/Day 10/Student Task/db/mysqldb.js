var mysql =require('mysql2');
/**
 * @description creating connection with database
 */
var connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    database : 'myharbinger',
    password:'Test_1234',
});
connection.connect(function(err){
    if(!!err){
        console.log(err);
      }else{
        console.log('Connected!:)');
      }
     });
module.exports = connection;
