const studentController = require('../student/controller/studentController')
const express =require('express')
const bodyparser = require('body-parser')
var app = express();

app.use(express.json());
app.use(express.urlencoded( { extended : true } ));

//load the controller from here
app.use('/student',studentController)

app.listen(8082, () => {
    console.log('Express server started at port : 8082');
});