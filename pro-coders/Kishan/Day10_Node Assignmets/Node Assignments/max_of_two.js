let express = require('express');
let app = express();
let bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
/**
* @description post method 
* @param req
* @param res
*/
app.post('/',(req,res)=>{
    let number1 = req.body.number1;
    let number2 = req.body.number2;
    /**
    * @description function return maximum between two numbers
    * @param number1
    * @param number2
    */
    if(number1 == number2)
        res.send(`number1 = ${number1} is equal to ${number2}`);
    if(number1 > number2)
        res.send(`${number1} is maximum`);
    else
        res.send(`${number2} is maximum`);
})
/**
 * @description server is start on port : 3000
 * @param port
 * @param callbackfunction()
 */
app.listen(3000,()=>{
    console.log("server is running on port : 3000");
});

