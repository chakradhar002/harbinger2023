const stdcontroller=require('../POSTSTUDENT/controller/stdcontroller');
const express=require('express')
const bodyParser = require('body-parser')

var app=express();

app.use( express.json());
app.use( express.urlencoded( { extended:true } ) );

//
app.use('/student', stdcontroller);



app.listen(3004, () => {
    console.log('Express server started at port : 3004');
});

