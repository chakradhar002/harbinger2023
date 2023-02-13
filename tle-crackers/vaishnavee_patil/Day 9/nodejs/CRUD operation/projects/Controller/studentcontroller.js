const express = require('express');
var router = express.Router();
const service = require('../service/studentservice')
//routing to the poststudent page
router.post("/poststudent", service.putStudentlist);
//rounting to the get student list page
router.get("/getstudent", service.getStudentlist);
//routing to the delete student list page
router.delete("/deletestudent", service.deleteStudentlist);
//rounting to the update student list page
router.put("/putstudent", service.updateStudentlist);
//routing to the get student by id page
router.get("/getstudentbyid", service.getStudentById);
//routing to the get student by name page
router.get("/getstudentbyname", service.getStudentByname);
//routing to the deleting all student list page
router.delete("/deletestudentall", service.deleteStudentAll);
//roting to the crate student information page
router.post("/createstudentinfo", service.createStudentlist);
module.exports = router;