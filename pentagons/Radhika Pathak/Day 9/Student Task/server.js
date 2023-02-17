const studentcontroller=require('../Student Task/controller/studentcontroller');
const express = require('express');
const bodyParser = require('body-parser');
var app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//load controller from here
//specifying end point
app.use('/student',studentcontroller);

app.listen(3030,() => {
    console.log("Server started at port 3030");
});