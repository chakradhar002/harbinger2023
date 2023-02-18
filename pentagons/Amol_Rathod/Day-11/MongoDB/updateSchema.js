const express = require("express");

const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://localhost:27017/harbinger", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Customer schema created");
  })
  .catch((e) => {
    console.log(e);
  });

const productSchema = new mongoose.Schema({
  pname: {
    type: String,
    unique: true,
  },
  pprice: String,
});

const customer = mongoose.model("customer", productSchema);

let updateQuery = async () => {
  let updateRecord = await customer
    .findById("63e61852c34e2e34c35cf7b8")
    .update({ pname: "Sharad Pawar", pprice: "30303" });

  console.log(updateRecord);
};

updateQuery();
