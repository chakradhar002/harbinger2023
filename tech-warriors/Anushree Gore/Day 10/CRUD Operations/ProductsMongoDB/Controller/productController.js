const express = require('express');
let router = express.Router();
let service = require("../Service/productService");

//to insert/post product into db.
router.post("/insertProduct", service.insertProduct);

//to get all the products.
router.get("/showProduct", service.showProduct);

//to get product by passing id.
router.get("/showProductById/:id", service.showProductById);

//to update product info.
router.put("/updateProduct/:id", service.updateProduct);

//to delete product by passing an id.
router.put("/deleteProductById/:id", service.deleteProductById);

//to delete all record.
router.put("/deleteAllRecord", service.deleteAllRecord);


module.exports = router;