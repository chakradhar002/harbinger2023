const express = require('express');
var router = express.Router();
const service = require('../service/studentService');

router.get('/getStudentList', service.getStudentList);

router.post('/insertStudent', service.insertStudent);

router.put('/updateStudent', service.updateStudent);

router.delete('/deleteAllStudent', service.deleteAllStudent);

router.delete('/deleteStudentById', service.deleteStudentById);

router.get('/getStudentById', service.getStudentById);

router.get('/getStudentByName', service.getStudentByName);

module.exports = router;