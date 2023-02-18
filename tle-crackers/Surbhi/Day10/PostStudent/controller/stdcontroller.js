const express = require('express');
var router = express.Router();
 const service = require('../service/stdservice')

//get
router.get("/getliststudent", service.getStudentList);
//post
router.post("/insertStudentInfo",service.insertStudentInfo);
//update
router.put("/updateStudent/:rollnumber",service.updateStudent);
//DElete By id
router.delete("/deleteStudentById/:rollnumber",service.deleteStudentById);
//SearchByName
router.get("/searchByName/:name",service.searchByName);
//SearchById
router.get("/getStudentById/:rollnumber",service.getStudentById);
//Delete all students from database
router.delete("/deleteAllStudent",service.deleteAllStudent);

module.exports = router;