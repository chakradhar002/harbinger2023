const productController=require('../CRUD_operations/controller/productcontroller');
const express = require('express');
const bodyParser = require('body-parser');
var app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//load controller from here
//specifying end point
app.use('/product',productController);

app.listen(3030,() => {
    console.log("Server started at port 3030");
});