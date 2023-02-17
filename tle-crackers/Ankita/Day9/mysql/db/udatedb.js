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
       
        conn.query(`UPDATE students SET rollNo=24 WHERE name='anny'`)
        console.log('updated successfully')
    }
    conn.end()
})