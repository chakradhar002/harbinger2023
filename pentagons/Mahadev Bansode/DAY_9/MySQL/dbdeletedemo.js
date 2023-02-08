let mysql = require('mysql2');

let con = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : 'Test_1234',
    database : 'harbinger',
});

con.connect(function(err){
    if(err) throw err;
    console.log("Connected...!");

    con.query("delete from employee where id=100",function(err,result){
        if(err) throw err;
        console.log("deleted...!");
    });
});