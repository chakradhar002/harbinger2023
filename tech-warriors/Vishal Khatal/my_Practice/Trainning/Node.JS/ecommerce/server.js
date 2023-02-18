const express = require('express')
const empcontroller = require('../ecommerce/empcontroller/emplcontroller')
const bodyParser = require('body-parser')

var app = express();

app.use( express.json());
app.use( express.urlencoded( { extended:false } ) );

app.use('/employee', empcontroller);



app.listen(3030, () => {
    console.log('Express server started at port : 3000');
});

