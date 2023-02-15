let express = require("express");
let router = express.Router();// route refers to how applicatins' endpoint url responds to client request
let service = require("../product_using_Mongodb/productservices")

//This router will help in routing or exporting to displayalldocuments.
router.get("/displayallDocuments",service.getAllProductlist);
//This router will route to getProductById
router.get("/getProductById/:id",service.getProductById);
//THis router will route to createProductById
router.post("/createProductById",service.createProductById);

router.post("/insertInProduct",service.insertInProduct);

router.put("/updateProductById/:id",service.updateProductById);

module.exports = router;