const express = require('express');
var router = express.Router();

const service = require('../Service/studentService');
//get from db
router.get("/getStudentList", service.getStudentList);

//insert into db
router.post("/insertStudent", service.insertStudent);

//update into db
router.put("/updateStudent/:sid", service.updateStudent);

//delete from db by using id
router.delete("/deleteStudentById/:sid", service.deleteStudentById);

//delete all records
router.delete("/deleteAllStudents", service.deleteAllStudents);

//get element by using id
router.get("/getElementById/:sid", service.getElementById);

// search student by name
router.get("/searchStudentByName/:sname", service.searchStudentByName);

module.exports = router;