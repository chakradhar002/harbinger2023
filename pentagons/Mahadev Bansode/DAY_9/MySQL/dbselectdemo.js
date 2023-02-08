const mysql = require('mysql2');

let con = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : 'Test_1234',
    database : 'harbinger',
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected Successfully...!");

    con.query("select * from employee",function(err,result){
        if(err) throw err;
        console.log(result);
    });
});