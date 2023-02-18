const userController = require('../day11-mongodb/controller/userController');
const express = require('express');
const bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/users', userController);

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

