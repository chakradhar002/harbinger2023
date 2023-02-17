const stdController = require('../Day9/controller/stdController')
const express = require('express')
const bodyParser = require('body-parser')

var app = express();

app.use( express.json());
app.use( express.urlencoded( { extended:true } ) );

app.use('/student', stdController);



app.listen(3009, () => {
    console.log('Express server started at port : 3000');
});

