const express = require('express');
const mongooese = require('mongoose');
const url = 'mongodb://localhost/mydatabase';
const app = express();

mongooese.connect(url,{useNewUrlParser : true})

const con = mongooese.connection

con.on('open', function(){
    console.log('db connected')
})

module.exports =con;


// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/mydatabase')

// var conn = mongoose.connection;

// conn.on('connected', function () {
//     console.log("database connected")
// });

// conn.on('disconnected', function () {
//     console.log("database disconnected");
// })

// conn.on('error', console.error.bind(console, 'connection error'));
// module.exports = conn;