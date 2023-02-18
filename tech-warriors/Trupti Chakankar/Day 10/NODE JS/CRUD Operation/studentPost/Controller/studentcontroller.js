
/**
 * @author:Trupti
 * 
 */

const express = require('express')
let router = express.Router();
const service = require('../Service/studentservice')

//get All record of the table.
router.get('/getstudentlist',service.getstudentlist);

//insert in table
router.post('/insertstudentlist', service.insertStudentList)

//Update table
router.put('/updateStudent',service.updateStudent)

//delete single element
router.post('/deleteStudentbyid',service.deleteStudent)

//get by id
router.get('/getById/:sid',service.getById)

//SEARCH by NAME
router.get('/searchByName/:sname',service.searchByName)

//delete all record from table
router.post('/deleteallStudent',service.deleteallStudent);

module.exports = {router};