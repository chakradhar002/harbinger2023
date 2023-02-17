var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'test_1234',
    database:'Harbinger'

});
con.connect(function(err) {
    if(err){
        throw err
    }
    
        console.log("connected");
        const query="create table customers(name varchar(255), address varchar(244))";
        con.query(query,function(err,result){
            if(err){
                throw err;
            }else{
                console.log("Table Created")
            }
        });
    
});