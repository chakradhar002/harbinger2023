const productController = require('./controller/product_controller');
const express = require('express');
const app = express();

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use('/product',productController);

app.listen(4000,()=>{
    console.log("application is listening at port : 4000");
});