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
        const query = `insert into trainees values ('deepa', 22)`
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