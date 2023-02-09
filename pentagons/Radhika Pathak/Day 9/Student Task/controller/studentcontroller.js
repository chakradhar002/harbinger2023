const express=require('express');
var router=express.Router();

//create service to call logic
const service=require('../service/studentservice');

// get method to display all students records 
router.get('/getStudentList',service.getStudentList);

// post method for creating a new Student
router.post('/createStudent',service.createStudent);

// put method to update existing student record
router.put('/updateStudentById/:id',service.updateStudentById);

//delete method to delete a specific student by id
router.delete('/deleteStudentById/:id',service.deleteStudentById);

//delete method to delete all students record
router.delete('/deleteAllStudents',service.deleteAllStudents);

//getbyid method to get specific students by its id
router.get('/getStudentById',service.getStudentById);
 
//searchById method to search a specific student by its name
router.get('/searchByName/:name',service.searchByName);

module.exports = router;