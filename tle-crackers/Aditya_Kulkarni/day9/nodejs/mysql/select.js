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
        const query = `select * from customers`
        connection.query(query , (err , res) => {
            if(err) {
                console.log(err)
            }else {
                const result = Array.from(res)
                result.forEach(res => console.log(res.cname))
            }
        })
    }
    connection.end()
})