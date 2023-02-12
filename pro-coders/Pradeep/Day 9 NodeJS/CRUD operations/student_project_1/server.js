const studentController = require('../stud_proj_1/controller/studentController');
const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(express.json());
app.use(express.urlencoded( {extended:false} ));

app.use('/student', studentController);
app.listen(3000, () => {
    console.log('Server running at : 3000');
});