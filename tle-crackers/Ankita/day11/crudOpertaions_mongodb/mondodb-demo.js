var mongoose = require('mongoose');
// var MongoClient = require('mongodb').MongoClient;
// var mongodburl = "mongodb://localhost:27017";
mongoose.connect('mongodb://localhost:27017/ankita')

var conn = mongoose.connection;
conn.on('connected', function () {
    console.log('database is connected successfully');

});
conn.on('disconnected', function () {
    console.log('database is disconnected successfully');
})
conn.on('error', console.error.bind(console, 'connection error:'));
module.exports = conn;
