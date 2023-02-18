/**
* @author Mahadev Bansode
* @Team Pentagon
*/
let express = require('express');
let app = express();
const bodyParser = require('body-parser');

/**
* @description bodyParser. json returns middleware that only parses JSON
*/
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
}))

/**
* @description get method loads the accept_two_variables.html file on browser.
* accept_two_variables.html is used to accept number from user through html form.
* @param request
* @param response
*/
app.get('/',function(req,res){
    res.sendFile(__dirname + '/accept_two_variables.html');
});
/**
* @description post method loads the processed data on browser.
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
* @description The app.listen() function is used to bind and listen the connections on the specified host 
* and port : 3000
* @param port
* @param callbackfunction()
*/
app.listen(3000,()=>{
    console.log("server is running on port : 3000");
});