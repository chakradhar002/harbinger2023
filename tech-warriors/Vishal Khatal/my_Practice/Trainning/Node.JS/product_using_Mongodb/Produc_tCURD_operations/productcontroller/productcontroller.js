let express = require("express");
let router = express.Router();// route refers to how applicatins' endpoint url responds to client request
let service = require("../productservice/productservice")

//This router will help in routing or exporting to displayalldocuments.
router.get("/getallproductlist",service.getAllProductlist);
//This router will route to getProductById
router.get("/getproductbyid/:id",service.getProductById);
//THis router will route to createProductById
router.put("/createproductbyid",service.createProductById);
//This route to updateProductById
router.put("/updateproductbyid/:id",service.updateProductById);
//This will route to deleteProductById
router.delete("/deleteproductbyid/:id",service.deleteProductById);
//This will route to deleteProductById.
router.delete("/deleteproductbyid/:id",service.deleteProductById);

module.exports = router;