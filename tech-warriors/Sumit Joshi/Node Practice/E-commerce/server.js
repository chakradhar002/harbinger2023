const studentController = require('./routers/router')
const express = require('express')
const bodyParser = require('body-parser')
var app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

//load controller from here

app.use('/student',studentController)

app.listen(3000,()=>{
    console.log("Express server started at port 3000");
})