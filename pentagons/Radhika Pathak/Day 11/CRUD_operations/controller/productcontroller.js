const express = require('express');
var router = express.Router();

//create service to call a logic
const service = require('../service/productservice');

//get method to display all the product records
router.get('/getProductDetails',service.getDetails);

//post method for creatimg a new product
router.post('/createProduct',service.insertProduct);

//put method to update existing product
router.put('/updateProduct');

//delete method to delete specific product by its id
router.delete('/deleteProductById');

//delete method to delete all the products
router.delete('/deleteAllProducts');

//getbyid method to particular product details
router.get('/getProductById/:id');

//search method to search a product bt its name
router.get('/searchByProductName/:name',service.getProductByName);

module.exports = router;