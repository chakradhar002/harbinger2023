var mysql = require('mysql2')

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password : "root"
})

const query = 'create database myharbinger'

con.connect(function(err){
    if(err) throw err
    con.query(query,(err)=>{
        if(err) throw err;
        console.log("database is created");

    })
    
})