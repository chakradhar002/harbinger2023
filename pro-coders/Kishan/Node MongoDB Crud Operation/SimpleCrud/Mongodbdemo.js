const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Mangodb");
const conn = mongoose.connection;

conn.on('connected',function(){
    console.log('database is connected successfuly')
});
conn.on('disconnected',function(){
    console.log("database is disconnected");
})

conn.on('err',console.error.bind(console,"connectio error"));

module.exports = conn;