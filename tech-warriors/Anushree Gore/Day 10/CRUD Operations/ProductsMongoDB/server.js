/**
 * @author: Anushree Gore
 */

// importing libraries and dependencies
let express = require("express")
let bodyparser = require("body-parser")

//controller path
let productController = require("../ProductsMongoDB/Controller/productController")

let app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use('/products', productController);
app.listen(5000, function() {
    console.log("Server is running at 5000");
})