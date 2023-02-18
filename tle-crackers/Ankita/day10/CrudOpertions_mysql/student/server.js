const studentController = require('../CrudOperations_mongodb/controller/studentController');
const express = require('express')
const bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/students', studentController);

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

