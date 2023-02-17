var mysql = require('mysql')

var con = mysql.createConnection({
    port : 3306,
    user:'root',
    password : 'root',
    database : 'myharbinger'
});

con.connect(function(err){
    if(err) throw err;
    else{
        console.log('Connected')
    }

    con.query
});

module.exports = con;