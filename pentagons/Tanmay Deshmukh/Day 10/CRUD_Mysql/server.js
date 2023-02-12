const studcontroller = require('../Getalldatafromdatabase/controller')
const express = require('express')
const bodyParser = require('body-parser')
var app = express();


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/student', studcontroller);


app.listen(1234, () => {
    console.log('Express server started at port : 3000');
});
