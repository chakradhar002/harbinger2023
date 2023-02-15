const express = require('express');
var router = express.Router();
const service = require('../service/studentService')

//router for getting student information
router.get("/getStudentList" , service.getStudentList);

////router for getting student information by id
router.post("/getStudentById" , service.getStudentById);

//router for updating student information by id
router.post("/updateStudentById" , service.updateStudentById);

//router for inserting student information
router.post("/createStudentInfo" , service.createStudentInfo);

//router for deleting student information by id
router.post("/deleteStudentById" , service.deleteStudentById);

//router for deleting student information
router.post("/deleteAllStudent" , service.deleteAllStudent);

//router for search student information by name
router.get("/searchStudentByName" , service.searchStudentByName);

module.exports = router;