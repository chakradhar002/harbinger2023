const express = require('express')
var router = express.Router();

const service = require('../Services/studentServices')


/**Get All Record */
router.get('/getstudent',service.getStudent);