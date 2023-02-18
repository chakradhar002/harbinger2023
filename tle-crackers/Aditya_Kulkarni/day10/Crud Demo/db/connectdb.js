const mysql = require('mysql')
class SQLConnection {
    constructor(){
        this.connection =  mysql.createConnection({
            port:3306 , 
            user:'root',
            password:'root',
            database : 'harbinger'
        })
    }
    connect = async() => this.connection.connect((err) => {
        if(err){
            console.log(err)
            return false
        }else {
            console.log("database connected successfully")
            return true
        }
    })
    endConnection = async() => this.connection.end(()=> console.log("database terminated successfully"))
}

const connection = new SQLConnection()

module.exports = {connection}