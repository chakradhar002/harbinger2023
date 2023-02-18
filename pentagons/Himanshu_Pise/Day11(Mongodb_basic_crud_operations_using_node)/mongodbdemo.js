var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/herbinger");
var conn = mongoose.connection;
        conn.on('connection',function(){
            console.log('Database Created Successfully');
        });
        conn.on('disconnected',function(){
            console.log('Database is Disconnected');
        })

        conn.on('error',console.error.bind(console,'connection error'));


module.exports = conn;


