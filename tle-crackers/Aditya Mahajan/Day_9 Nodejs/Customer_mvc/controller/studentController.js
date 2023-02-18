/**
 * 
 * @author Aditya Mahajan
 * 
 */

const express = require('express')
const router = express.Router()
const service = require('../service/studentService')

// Retrives all records from database
router.get('/getallrecords', service.getallRecords)

// Insert and display new record in database
router.post('/insertRecord', service.insertRecord);

// Update existing record in database
router.put('/updateRecord', service.updateRecord);

// Delete specified record from database
router.delete('/deleteRecord', service.deleteRecord);

// Retrive element by id 
router.get('/getelementbyid', service.getelementbyid);

// Delete all records from database
router.delete('/deleteAllRecords', service.deleteAllRecords)

// search for particular record
router.get('/getSpecficRecord', service.getSpecficRecord)
//
module.exports = router;

