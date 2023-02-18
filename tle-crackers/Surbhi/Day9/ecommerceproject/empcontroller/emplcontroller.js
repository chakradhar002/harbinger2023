const express = require('express');
var router = express.Router();
 const service = require('../service/empservice')





router.get("/getlistemployee", service.getEmployeeList);




module.exports = router;