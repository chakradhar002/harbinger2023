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
        const query="SELECT * FROM customers";
        con.query(query,function(err,result,fields){
            if(err){
                throw err;
            }else{
                console.log(result)
            }
        });
    
});