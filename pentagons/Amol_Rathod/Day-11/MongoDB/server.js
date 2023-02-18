const mongoose = require("mongoose");

let conn = mongoose.connection;

mongoose.connect("mongodb://localhost:27017/harbinger");

conn.on("connected", function () {
  console.log(`Connected`);
});

conn.on("disconnected", function () {
  console.log(`Disconnected`);
});

conn.on("error", console.error.bind(console, "connection error :"));

module.exports = conn;
