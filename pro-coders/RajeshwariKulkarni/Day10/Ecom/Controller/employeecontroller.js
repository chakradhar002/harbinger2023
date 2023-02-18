const express = require('express')
var router = express.Router();

const service = require('../Service/employeeservice')

// Get All Records :
router.get('/getlistemp',service.getListEmp);

// Get Record by Id :
router.get('/getempid',service.getEmpId);

//Insert Record : 
router.post('/createemp',service.createEmp);

//Update Record : 
router.put('/updateemp',service.updateEmp);

//Delete Recoord : 
router.delete('/deleteemp',service.deleteEmp);

// Delete All Record :
router.delete('/deleteall',service.deleteAll);

//Search by Name :
router.get('/getempname',service.getEmpName);

module.exports = router;