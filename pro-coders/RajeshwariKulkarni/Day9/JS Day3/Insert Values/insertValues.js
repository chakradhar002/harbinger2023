var mysql = require('mysql')

var conn = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : 'root',
    database : 'myharbinger'
})

conn.connect(function(err){
    if(err) throw err;
    console.log('Error'+err)

    conn.query('insert into employee(eid,ename)values(101,"Rajeshwari Kulkarni")',function(err,result){
        if(err) throw err;
        console.log("Values are inserted");
    })
})