var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'test_1234',

});
con.connect(function(err) {
    if(err){
        throw err
    }
    
        console.log("connected");
        const query="create database Harbinger";
        con.query(query,function(err,result){
            if(err){
                throw err;
            }else{
                console.log("Database Created")
            }
        });
    
});