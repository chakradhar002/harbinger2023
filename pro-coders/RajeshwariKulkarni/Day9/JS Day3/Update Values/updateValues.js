var mysql = require('mysql')

const conn = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : ' root',
    database : 'myharbinger'
})

conn.connect(function(err){
    if(err) throw err;
    console.log(err)

    conn.query('update')
})