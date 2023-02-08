const express = require('express');
let router = express.Router();
const service = require('../Service/getStudentList');

router.get('/getstudentlist',service.getStudentList);

module.exports = router;