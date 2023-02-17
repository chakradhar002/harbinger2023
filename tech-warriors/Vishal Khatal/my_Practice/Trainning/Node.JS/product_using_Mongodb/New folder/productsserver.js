let express = require("express")//imports express module
let productController = require("../product_using_Mongodb/productcontroller")
let bodyParser = require("body-parser")

let app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/product",productController);

app.listen(3033, ()=>{// use to bind and listen the connection on perticular host and port
    console.log("Server Started at 3033")
});