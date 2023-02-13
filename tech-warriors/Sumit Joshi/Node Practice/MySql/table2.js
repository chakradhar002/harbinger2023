var mysql = require('mysql2')

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password : "root",
    database:"myharbinger"
})

const query = 'create table Employee(eid varchar(20) primary key,ename varchar(50),eadd varchar(50))'
const query1 = "insert into Employee (eid,ename,eadd) values ('1','Sumit','Pune')"
const query2 = "select * from Employee"

con.connect(function(err){
    if(err) throw err
    con.query(query,(err)=>{
        if(err) throw err;
        console.log(`Table created successfully`);
    })
    con.query(query1,(err)=>{
        console.log("Data inserted successfully");
    })
    con.query(query2,(err,data)=>{
        console.log(data);
    })
})