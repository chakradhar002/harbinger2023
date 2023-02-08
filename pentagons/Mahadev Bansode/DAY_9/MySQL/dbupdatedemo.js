let mysql = require('mysql');

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

    con.query("update employee set name = 'Sam Curran' where id = 100",function(err){
        if(err) throw err;
        console.log("Updated Successfully...!");
    });
});