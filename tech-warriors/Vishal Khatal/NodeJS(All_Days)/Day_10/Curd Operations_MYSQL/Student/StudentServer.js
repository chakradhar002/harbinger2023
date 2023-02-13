let express = require("express")//imports express module
let StudentController = require("../Student/StudentController/StudentController")// imports the controller 
let bodyParser = require('body-parser') // use to process data sent in an HTTP request body

let app = express(); //It calls the express function & puts new express application inside the app variable ("like object of a class")
app.use(express.json());// use to parse the incomming requests with JSON payloads
app.use(express.urlencoded({extended:true}));
app.use("/Student",StudentController);//use to bind data with app object

app.listen(3031, ()=>{// use to bind and listen the connection on perticular host and port
    console.log("Server Started at 3031")
});