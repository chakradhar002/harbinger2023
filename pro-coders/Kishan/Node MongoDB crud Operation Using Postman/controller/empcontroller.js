const express = require('express');
var router = express.Router();
const service = require('../Services/empServices')

/**
 * @description create employee details using post method
 */
router.post("/insertRecords", service.insertRecords);

/**
 * @description update employee details by post method
 */
router.post("/updateRecordById", service.updateRecordById);

/**
 * @description  Delete employee by id using post method
 */
router.post("/deleteDataById", service.deleteDataById);

/**
 * @description get employee detais by id using post method
 */
router.post("/getEmployeeDetailsById", service.getEmployeeDetailsById);


module.exports = router;