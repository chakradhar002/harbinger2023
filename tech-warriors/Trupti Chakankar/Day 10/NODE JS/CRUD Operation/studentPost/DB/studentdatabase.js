var mysql = require('mysql2');
/**
 * @description :Database Connection
 */

let con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'Test_1234',
    database  : 'myherbinger'
});

con.connect(function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Connected!!");
    }
});

module.exports = {con};