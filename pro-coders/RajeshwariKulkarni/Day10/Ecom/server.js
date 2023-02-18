var empController = require('./Controller/employeecontroller')
const express = require('express')
const bodyParser = require('body-parser')

var app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}));
//
app.use('/employee',empController);

app.listen(3000, ()=>{
    console.log('Express started at port : 3306')
})