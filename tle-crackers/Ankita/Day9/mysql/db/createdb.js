var mysql=require('mysql')

var conn=mysql.createConnection({
    host :"localhost",
    user:'root',
    password: 'Test_1234',
    port:3306,
    database:'ankita22'

})
conn.connect(err =>{
    if(err){
        console.log(err)
    }
    else{
        console.log(`connected Successfully`)
        // conn.query(`CREATE DATABASE ankita22`)
    }
    conn.end()
})
module.exports=conn;