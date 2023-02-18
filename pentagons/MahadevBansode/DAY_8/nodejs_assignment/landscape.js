/**
 * @author Mahadev Bansode
 * @Team Pentagon
 */
let express = require('express');
let bodyParser = require('body-parser');

let app = express();


/**
 * @description bodyParser. json returns middleware that only parses JSON
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));

/**
 * @description get method loads the accept_one_variable.html file on browser.
 * accept_one_variable.html is used to accept number from user through html form.
 * @param req
 * @param res
 */
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/accept_two_variable.html');
});

/**
 * @description post method loads the processed data on browser.
 * @param req
 * @param res
 */
app.post('/',(req,res)=>{

    /**
    * checks weather landscape or not
    * @param number1
    * @param number2
    */
    let height = req.body.number1;
    let width = req.body.number2;

    if(width > height)
        res.send(`Landscope : True`);
    else
        res.send(`Landscape : False`);
});

/**
 * @description The app.listen() function is used to bind and listen the connections on the specified host and port : 3000
 * @param port
 * @param callbackfunction()
 */
app.listen(3000,()=>{
    console.log(`server is running on port : 3000`);
})