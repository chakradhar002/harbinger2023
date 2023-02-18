var studentController = require('../Student/Controller/studentController')
const express = require('express')
const bodyParser = require('body-parser')

var app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use('/student',studentController);

app.listen(3000, ()=>{
    console.log('Express started at port : 3306')
})