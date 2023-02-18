let express = require('express');
let app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
}))
/**
* @description post method
* @param req
* @param res
*/
app.post('/', (req, res)=>{

    let number1 = req.body.number1;
    let number2 = req.body.number2;

    //swapping Numbers
    let tempNumber = number1;
    number1 = number2;
    number2 = tempNumber;

    res.send(`Swapped Numbers : \n number1 = ${number1} and number2 = ${number2}`);
})
/**
* @description server is start on port : 3000
* @param port
* @param callbackfunction()
*/
app.listen(3000,()=>{
    console.log("server is running on port : 3000");
});