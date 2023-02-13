const { Router } = require('express');
const express = require('express')
var router = express.Router();
const service = require('../service/studentService');


router.get('/studentlist',service.getallstudents);
router.get('/getstudentbyid/:id',service.getStudentById);
router.post('/addstudent',service.addStudent);
router.put('/updatebyid/:id',service.updateById);
router.get('/searchbyname',service.searchByName);
router.delete('/deletebyid/:id',service.deleteById);
router.delete('/deleteallstudent',service.deleteAllStudent);

module.exports = router;