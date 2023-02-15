const service = require('../service/product_service');
const express = require('express');

const router = express.Router();

router.get('/getproduct',service.getProductByName);

router.post('/postproduct',service.createProduct);

router.delete('/deleteproduct/:id',service.deleteProductById);

router.put('/updateproduct/:id',service.updateProductById);

router.put('/getproductbyid/:id',service.getProductById);

module.exports = router;