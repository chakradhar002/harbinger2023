const mysql = require('mysql')

const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "Test_1234",
    database : "harbinger"
})

connection.connect(err => {
    if(err) {
        console.log(err)
    }else {
        const query = `select * from trainees`
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