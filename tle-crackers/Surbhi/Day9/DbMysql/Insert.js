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
        const query="INSERT INTO customers (name, address) VALUES ('Surbhi', 'Kothrud')"
        con.query(query,function(err,result){
            if(err){
                throw err;
            }else{
                console.log("Data Inserted")
            }
        });
    
});