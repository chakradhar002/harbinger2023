var express = require('express');
var services = require('../services/employeeservice');  
var router = express.Router() //router model from express used to route 

//Get all record of the employee
router.get('getallemployee',services.getAllEmployees);

module.router = {
    getAllEmployees
}