var mysql = require('mysql')

var con = mysql.createConnection({
    host : 'localhost',
    port : '3306',
    user : 'root',
    password : 'root',
    database : 'myharbinger' 
});

con.connect(function(err){
    if(err) throw err;
    console.log("got some error : "+err)

    con.query("create table employee(eid int primary key,ename varchar(20))",function(err,result){
        if(err) throw err;
        console.log("Table Created!!");
    });
});
