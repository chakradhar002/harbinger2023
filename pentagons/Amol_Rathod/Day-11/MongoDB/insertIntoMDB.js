// const createSchema = require("./createSchema");

const express = require("express");

const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://localhost:27017/harbinger", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Product schema created");
  })
  .catch((e) => {
    console.log(e);
  });

const productSchema = new mongoose.Schema({
  pname: String,
  pprice: String,
});

const product = mongoose.model("product", productSchema);

// let productInfo = new product({
//   pname: "Rathod",
//   pprice: "20",
// });

let productInfoListOne = {
  pname: "Sher Shan",
  pprice: "20",
};

const productInfo = new product(productInfoListOne);

productInfo.save((err, data) => {
  console.log(`Id : ${data.id}`);
  console.log(data);
});

// product.createCollection();

// ? For createSchema file
// let userInfo = new createSchema.user({
//   name: "Amol Rathod",
//   age: "30",
// });

// userInfo.save((err, data) => {
//   console.log(`inserted into users`);
//   console.log(data);
// });
