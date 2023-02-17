const mongoose = require("mongoose");
const express = require("express");

mongoose.set("strictQuery", false);

// mongodb : mongodb://127.0.0.1:27017/db_name

mongoose
  .connect("mongodb://localhost:27017/harbinger", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection done");
  });

const userSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  age: Number,
});

const user = mongoose.model("user", userSchema);

// user.createCollection().then(() => {
//   console.log(`Collection created`);
// });

// mongoose.Collection("user");

// let userInfo = new user({
//   name: "Amol Rathod",
//   age: "30",
// });

// userInfo.save((err, data) => {
//   console.log(data);
// });

module.exports = { user };
