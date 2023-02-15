var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/democollection')
//here democollection is a collection name don't use 

var conn = mongoose.connection;
conn.on('connected',function(){
    console.log('databse is connected sucessfully');
})
conn.on('disconnected',function(){
    console.log('databse is disconnected !!')
})

conn .on('error',console.error.bind(console,'connection error : '));
module.reports = conn;

