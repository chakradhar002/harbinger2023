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
        const query = `create database harbinger`
        connection.query(query , (err , res) => {
            if(err) {
                console.log(err)
            }else {
                console.log(`created table successfully`)
            }
        })
    }
    connection.end()
})

// host : "localhost",
//     user : "root",
//     password : "Test_1234",
//     database : "crud"
