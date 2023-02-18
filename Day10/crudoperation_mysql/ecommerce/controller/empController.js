
const express = require('express');

var router = express.Router();

const service = require('../service/empservice')

// this is my router for redirect to serive module
router.get('/getemployeelist', service.getemployeelist);

// this is my router for redirect to serive module
router.post('/createemployee', service.createemployee);

module.exports = router;