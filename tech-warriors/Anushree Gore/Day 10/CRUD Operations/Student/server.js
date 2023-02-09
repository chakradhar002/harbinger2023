const stdController = require('./Controller/studentController')
const express = require('express')
const bodyParser = require('body-parser')

var app = express()

app.use(express.json());
app.use(express.urlencoded( { extended:true } ));

//linking of controller 
app.use('/student', stdController)

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});
