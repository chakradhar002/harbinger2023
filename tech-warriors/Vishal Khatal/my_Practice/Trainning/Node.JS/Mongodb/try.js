var mongoose = require('mongoose');
var express = require('express')
var app =express()
var url ="mongodb://localhost:27017/resturant";
mongoose.connect(url,{useNewUrlParser : true});
var conn = mongoose.connection;
conn.on('open' ,function()
{
    console.log('database is connected .');
});

module.exports = conn;
