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
       
        conn.query('Insert into students(name , address , rollNo) values ("anny" ,"backstreet high", 23)')
        console.log(`values inserted`)
    }
    conn.end()
})