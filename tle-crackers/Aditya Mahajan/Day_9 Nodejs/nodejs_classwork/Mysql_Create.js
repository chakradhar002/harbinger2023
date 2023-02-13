var mysql = require('mysql')
var con = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "nodejs"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("connected")

    // con.query("create database nodejs",function(err){
    //     console.log("database created")
    // })

    // con.query("use nodejs",function(err){
    //     console.log("used nodejs")
    // })

    // var create_table = "CREATE TABLE customers (cid int, name VARCHAR(255), address VARCHAR(255))";
    // con.query(create_table,function(err,result){
    //     if(err) throw err;
    //     console.log("table created");
    // })

    // var insert_record = "INSERT into customers (cid,name,address) values (3,'sumit','latur')";
    // con.query(insert_record,function(err,result){
    //     if (err) throw err;
    //     console.log("1 record inserted");
    // })

    // var select = "select * from customers";
    // con.query(select, function (err, result, fields) {
    //     if (err) throw err;
    //     console.log(result);
    // })

    // var filter_select = "select cid,name,address from customers where address = 'latur'";
    // con.query(filter_select,function(err,result){
    //     if(err) throw err;
    //     console.log(result);
    // })

    // order by
    // var order_by = "select cid,name,address from customers ORDER BY address";
    // con.query(order_by,function(err,result){
    //     if(err) throw err;
    //     console.log(result);
    // })

    // delete
    // var del = "delete from customers where cid = 5";
    // con.query(del,function(err,result){
    //     if(err) throw err;
    //     console.log("row deleted");

    // })

    // update
    // var update = "update customers set address = 'miraj' where cid = 4";
    // con.query(update,function(err,result){
    //     if(err) throw err;
    //     console.log(result.affectedRows + " record(s) updated");
    // })

    // limit
    // var limit = "select * from customers LIMIT 3";
    // con.query(limit,function(err,result){
    //     if(err) throw err;
    //     console.log(result);
    // })
})
