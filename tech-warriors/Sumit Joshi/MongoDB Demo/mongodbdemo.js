var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test')

var con = mongoose.connection;
    con.on('connected',function(){
     console.log("Database is connected successfully");
    })
        con.on('disconnected',function(){
            console.log("Database is connected successfully");
})
            con.on('error',console.error.bind(console,'connection error'));
            module.exports = con;