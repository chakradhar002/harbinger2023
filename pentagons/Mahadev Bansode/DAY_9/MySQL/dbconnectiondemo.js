var mysql = require('mysql2');

var con = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : 'Test_1234',
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected!");

    con.query("Create database harbinger",function(err,result){
        if(err) throw err;
        console.log("Databases created"+result);    
    });
});