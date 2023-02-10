const express = require("express");

const service = require("../services/service");

const router = express.Router();

// get request :
router.get("/getstudentlist", service.getStudent);

// getElementById :
router.get("/getelementbyidstudentlist/:id", service.getStudentById);

// post request :
router.post("/createstudentlist", service.createStudent);

// put request :
router.put("/updatestudentlist/:id", service.updateStudent);

// delete request :
router.delete("/deletestudentlist/:id", service.deleteStudent);

// deleteAll request :
router.delete("/deleteallstudentlist", service.deleteAllStudent);

//searchStudentByName :
router.get("/searchstudentbyname/:name", service.searchElementByName);

module.exports = { router };
