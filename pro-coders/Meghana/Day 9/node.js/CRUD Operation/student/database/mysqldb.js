var mysql=require('mysql2');

/**
 * @author:Meghana
 */
var connection = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : "root",
    password : "Test_1234",
    database:'myharbinger'
});
connection.connect(function(err){
    if(err) throw err;
    console.log("Connected");
    
});

module.exports =connection;