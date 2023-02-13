var mysql = require('mysql2')

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password : "root",
    database:"myharbinger"
})

const query = 'create table trainee1(tname varchar(50) primary key,tage varchar(20),tadd varchar(50))'

con.connect(function(err){
    if(err) throw err
    con.query(query,(err)=>{
        if(err) throw err;
        console.log(`Table created successfully`);

    })
    
})