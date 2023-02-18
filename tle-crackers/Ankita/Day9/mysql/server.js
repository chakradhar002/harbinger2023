const studentController = require('../mysql/controller/studentController');
const express = require('express')
const bodyparser = require('body-parser')
var app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/student', studentController);

app.listen(3000, () => {
    console.log('Express server started at port : 3306');
});