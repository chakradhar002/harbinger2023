const empController = require('../ECom/controller/empController');
const express = require('express');
const bodyParser = require('body-parser')

var app = express()

app.use(express.json());
app.use(express.urlencoded({encoded:true}));

app.use('/employee',empController)

app.listen(3000,()=>{
    console.log("Express server started at port : 30000");
});