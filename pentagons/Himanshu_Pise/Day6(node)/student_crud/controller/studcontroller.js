const express = require('express');
var router = express.Router();
 const service = require('../service/studservice')

 router.post("/postliststudent", service.postStudentList);

module.exports = router;