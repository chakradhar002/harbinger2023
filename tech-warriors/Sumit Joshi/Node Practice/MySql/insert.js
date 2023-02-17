var mysql = require('mysql2')

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password : "root",
    database:"myharbinger"
})

const query = "insert into trainee1 (tname,tage,tadd) values ('Rohit',23,'pune');"
const query1 = "select * from trainee1"

con.connect(function(err){
    if(err) throw err
    con.query(query,(err,data)=>{
        if(err) throw err;
        console.log(`Table created successfully`);        

    })
    con.query(query1,(err,data)=>{
        console.log(data);
    })
    
})