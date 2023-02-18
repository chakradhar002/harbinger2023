const express = require('express');
var router = express.Router();
 const service = require('../service/stdservice')





router.get("/getliststudent", service.getStudentList);




module.exports = router;