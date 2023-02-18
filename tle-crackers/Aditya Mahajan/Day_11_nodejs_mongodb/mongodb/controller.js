const express = require('express')
var router = express.Router();
const service = require('../mongodb/service'); // need change mongo service

router.get('/displayrecord',service.getallrecord);       // need change


module.exports = router;