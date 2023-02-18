var mysql = require('mysql')

/**
 * @ Create Connection with Database
 */

var conn = mysql.createConnection({
    host : 'localhost',
    port : 3306,
    user : 'root',
    password : 'root',
    database : 'myharbinger'
})

conn.connect(function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("Connected!!")
    }
})

module.exports = conn