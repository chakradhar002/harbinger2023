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
        const query = `delete from customers`
        connection.query(query , (err , res) => {
            if(err) {
                console.log(err)
            }else {
                console.log(` deleted successfully`)
            }
        })
    }
    connection.end()
})