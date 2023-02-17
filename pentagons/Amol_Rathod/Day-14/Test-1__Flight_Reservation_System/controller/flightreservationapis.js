const express = require("express");

const router = express.Router();

const getPassengersDetail = require("../services/getPassengerDetails");

router.get(
  "/getallpassengerdetails",
  getPassengersDetail.getAllPassengersDetail
);

// insertPassenger api :
router.post(
  "/insertpassengeraccount",
  getPassengersDetail.insertPassengerAccount
);

// insertPerson :
router.post(
  "/createaccountofperson",
  getPassengersDetail.createAccountOfPerson
);

// getAllPerson :
router.get("/getallpersonsdetail", getPassengersDetail.getAllPersonsDetail);

// insertCustomerDetails;
router.post(
  "/insertcustomerdetails",
  getPassengersDetail.insertCustomerDetails
);
module.exports = { router };
