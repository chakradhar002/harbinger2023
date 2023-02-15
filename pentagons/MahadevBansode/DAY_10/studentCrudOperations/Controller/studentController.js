/**
 * studentController is used to call the service method to performed specified operations.
 */
const express = require("express");
let router = express.Router();
const service = require("../Service/studentservice");

//using get Request
router.get("/getstudentlist", service.getStudentList);

//using PostRequest
router.post("/poststudentlist", service.createStudent);

//using put method;
router.put("/putstudentlist/:id", service.updateStudentById);

//using delete method
router.delete("/deletestudentlist/:id", service.deleteStudentById);

//using deleteAll method
router.delete("/deletestudentlist", service.deleteAllStudents);

//using put method : select by studentdetails id
router.put("/getstudentlistbyid/:id", service.getStudentById);

//using put method : select by studentdetails Name
router.put("/getstudentlistbyname/:name", service.getStudentByName);

module.exports = router;
