const express = require('express');
var router = express.Router();
const service = require('../Services/empservice')

/**
 * @description getting all employee list by get method
 */
router.get("/getlistemployee", service.getEmployeeList);

/**
 * @description getting all employee list by post method
 */
router.post("/getlistemployee", service.getEmployeeList);

//insert employee details using post
/**
 * @description create employee details using post method
 */
router.post("/createEmployeeInfo", service.createEmployeeInfo);

/**
 * @description update employee details by post method
 */
router.post("/updateEmployeeList", service.updateEmployeeList);

/**
 * @description  Delete employee by id using post method
 */
router.post("/deleteEmployeeList", service.deleteEmployeeList);

//get by id
/**
 * @description get employee detais by id using post method
 */
router.post("/getEmployeeDetailsById", service.getEmployeeDetailsById);

// delete all
/**
 * @description delete all details using post
 */
router.post("/deleteAllEmployeeList", service.deleteAllEmployeeList);

// search
/**
 * @description search employee details by name using post method
 */
router.post("/searchEmployeeDetailsByName", service.searchEmployeeDetailsByName);


module.exports = router;