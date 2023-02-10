const mysql = require('mysql')

const connection = mysql.createConnection({
    port : 3306 , 
    user : 'root' , 
    password : 'root',
    database : 'harbinger'
})

connection.connect(err => {
    if(err) {
        console.log(err)
    }else {
        const query = `insert into customers values ('sumit')`
        connection.query(query , (err , res) => {
            if(err) {
                console.log(err)
            }else {
                console.log(`inserted successfully`)
            }
        })
    }
    connection.end()
})