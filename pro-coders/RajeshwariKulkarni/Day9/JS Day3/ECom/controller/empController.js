const express =  require('express');
var router = express.Router();

const Service = require('../services/empService')

router.get('/getemployeelist',Service.getemployeelist)

module.exports = router;