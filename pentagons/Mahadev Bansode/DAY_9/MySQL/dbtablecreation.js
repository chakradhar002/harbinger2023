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
    console.log("connected");

    let sql = "Create table employee(id int primary key,name char(30),city char(30),mob long)";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log("Table Created");
    });

})