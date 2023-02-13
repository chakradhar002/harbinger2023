const express = require('express')
const { getEmployeeList , createEmployee  , updateEmployee , deleteEmployee , deleteAllEmployee , getEmployeeById , getEmployeeByName } = require('../service/employeeService')
const router = express.Router()

router.get('/getemployeelist', getEmployeeList)
router.get('/getemployeebyid/:id' , getEmployeeById)
router.get('/getemployeebyname/:name', getEmployeeByName)
router.post('/createEmployee', createEmployee)
router.put('/updateemployee/:id' , updateEmployee)
router.delete('/deleteemployee/:id' , deleteEmployee)
router.delete('/deleteallemployee' , deleteAllEmployee)
module.exports = router