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

    sql = "insert into employee(id,name,city,mob) values(100,'Mahadev','Pune',987162781)";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log("Record Inserted");
    });

});