const express = require('express')
var router = express.Router()
const service = require('../service/studentService')
//get student list
router.get("/getStudentlist",service.getStudentList)

//getElementById
router.get("/getStudentByID/:id",service.getStudentByID)

//insert into table
router.post("/CreateNewSudent",service.CreateStudentInfo)

//update the value in table
router.put("/UpdatedStudentDetails/:id",service.UpdateStudentByID)

//Delete Single value
router.delete("/DeleteSingleRecord/:id",service.DeleteStudentById)

//Delete all values
router.delete("/DeleteAllRecords",service.DeleteAllStudent)

//Search Student by name
router.get("/getStudentByName/:name",service.getStudentByName)

module.exports = router;