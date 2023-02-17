let mysql = require("mysql");
const connection = require("../../ecommerce/db/mysqldb");
let con = mysql.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"Test_1234",
    database:"myherbinger"
});
con.connect(function(error){
    if(!!error)
    {
        console.log(error);}
    else 
    {
        console.log("");
    }
});
module.exports = connection;