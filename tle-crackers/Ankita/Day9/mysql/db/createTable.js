const mysql=require('mysql')
const conn=mysql.createConnection({
    port:3306,
    user:'root',
    password:'Test_1234',
    database:'ankita22'
})
conn.connect(err =>{
    if(err){
        console.log(err)
    }
    else{
       
        conn.query(`CREATE TABLE students (name varchar(30) , address varchar(30), rollNo int(10))`)
        console.log('table created')
    }
    conn.end()
})