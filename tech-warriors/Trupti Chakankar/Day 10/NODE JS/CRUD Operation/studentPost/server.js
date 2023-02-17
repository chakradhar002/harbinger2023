const StdController = require('./Controller/studentcontroller')
const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(express.json());
app.use(express.urlencoded( {extended:false} ));
//linking for controller
app.use('/student',studentController.router)

app.listen(3000, () =>{
    console.log("Express server started at port : 3000");
});
