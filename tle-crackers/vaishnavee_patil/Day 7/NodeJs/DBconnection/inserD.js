var mysql=require("mysql")
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"isha"
})
con.connect(function(err){
    if(err) throw err;  
    console.log("connected");
    var sql="INSERT INTO customers (name,address) VALUES ?";
    var values=[
        ['isha','rohit']
    ]
    con.query(sql,[values],function(err,result){
        if(err) throw err;
        console.log("records inserted:"+result.affectedRows);

    })

})