/**
 * this file used to create database named 'harbinger'
 */
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/harbingergroup');

let conn = mongoose.connection;
conn.on('connected', function () {
    console.log("database is connected successfully...!");
})
conn.on('disconnected', function () {
    console.log("database is disconnected")
})

conn.on('error', console.error.bind(console, 'connection error:'));

module.exports = conn;