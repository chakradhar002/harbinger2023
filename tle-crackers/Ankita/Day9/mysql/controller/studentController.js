const express = require('express')
var router = express.Router();
const service = require('../service/studService');

router.get('/studentList',service.getallstudents);


module.exports = router;