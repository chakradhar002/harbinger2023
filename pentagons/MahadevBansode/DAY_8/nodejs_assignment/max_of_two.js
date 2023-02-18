/**
* @author Mahadev Bansode
* @Team Pentagon
*/

let express = require('express');
let app = express();
let bodyParser = require('body-parser');
const { request } = require('http');

/**
 * @description bodyParser. json returns middleware that only parses JSON
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

/**
* @description get method loads the accept_one_variable.html file on browser.
* accept_two_variable.html is used to accept number from user through html form.
* @param request
* @param response
*/
app.get('/',(request,response)=>{

    response.sendFile(__dirname+'/accept_two_variables.html');
})
/**
* @description post method loads the processed data on browser.
* @param req
* @param res
*/
app.post('/',(req,res)=>{

    /**
    * @number1 input number1 from html file 
    * @number2 input number2 from html file
    */
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
 * @description The app.listen() function is used to bind and listen the connections on the specified host 
 * and port : 3000
 * @param port
 * @param callbackfunction()
 */
app.listen(3000,()=>{
    console.log("server is running on port : 3000");
});
//console.log(maxNumber(10,20));
