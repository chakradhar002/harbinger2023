/**
 * @author Aditya Mahajan
 */
// importing required libraries and local files
const express = require('express')
const router = express.Router()
const service = require('../service/customerService')

// displays all data
router.get('/displayData', service.displayData)

// displays specific data according to id
router.get('/displayDataById/:id', service.displayDataById)

// insert a new record in database
router.post('/insertData', service.insertData)

// update existing record in database
router.put('/updateData/:id', service.updateData)

// delete specfic record from database
router.delete('/deleteRecord/:id', service.deleteRecord)

// delete whole data from database
router.delete('/deleteAllRecords', service.deleteAllRecord)

module.exports = router;