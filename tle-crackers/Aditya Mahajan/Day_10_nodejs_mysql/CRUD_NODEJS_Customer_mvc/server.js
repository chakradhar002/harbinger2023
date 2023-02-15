/**
 * 
 * @author Aditya Mahajan
 * 
 */


const studentController = require('./controller/studentController');
const express = require('express')
const bodyparser = require('body-parser')
var app = express()

// acts as middleware bridges
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use('/student', studentController);


// creating server
app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

