const express =  require('express')
var router = express.Router();
const services = require("../CRUD_MONGO/services")
const path = require('path')

//get Student list
router.get('/getstudentlist',services.getStudentlist); 

router.get('/getstudentbyname/:name',services.getStudentByName)

router.post('/createstudent',services.Createstudent);

router.put('/updatestudent/:id',services.updateStudent);

router.delete('/deleteAllStudent',services.deleteAllStudent)

router.delete('/deletestudentbyid/:id',services.deleteStudentById)

router.get('/getstudentbyid/:id',services.getStudentById)


module.exports = router;