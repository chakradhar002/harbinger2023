/**
 * @ Importing express,body-parser,and user define controller
 */
var express = require('express');
var bodyParser = require('body-parser');
var employeecontroller = require('../ECom MongodbProject/controller/employeecontroller');
var app = express();

/**
 * @ Author : RAjeshwari Kulkarni
 */

/**
 * used to convert data into json format
 */
app.use(bodyParser.json())
app.use(express.urlencoded  ({extended:true}))

/**
 * this will route to the controller file when endpoint will encounter
 */
app.use('/employee',employeecontroller)



/** @ Port Running on 3000  */
app.listen(3000,()=>{
    console.log("Port running on : 3000")
})
