/**
 * @author Mahadev Bansode
 * @Team Pantagon
 * 
 */

let express = require('express');
let app = express();
const bodyParser = require('body-parser');

/**
 * @description bodyParser. json returns middleware that only parses JSON
 * @param bodyParser.json()
 */
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
}))

/**
 * @description get method loads the accept_one_variable.html file on browser.
 * accept_one_variable.html is used to accept number from user through html form.
 * @param req
 * @param res
 */
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/accept_one_variable.html');
});

/**
 * @description get method loads the processed data on browser.
 * @param req
 * @param res
 */
app.post('/', (req, res) => {

    /**
    * @description number is accepted from html form.
    * if number is divisible by 3 => print 'fizz'
    * if number is divisible by 5 => print 'Buzz'
    * if number is divisible by 3 or 5 => print 'fizzBuzz'
    * if number is NOT divisible by 3 or 5 => print the integer
    * if given input is not a number => Nan - not a number! please enter integer
    */
    let number = req.body.number1;
    //if (!Number.isInteger(number)) 
    //res.send("Nan - Not a Number!");
    if (number % 3 == 0 && number % 5 == 0)
        res.send("fizzBuzz");
    else if (number % 3 == 0)
        res.send("fizz");
    else if (number % 5 == 0)
        res.send("Buzz");
    else
        res.send(number);
})

/**
* @description The app.listen() function is used to bind and listen the connections on the specified host and port : 3000
* @param port
* @param callbackfunction()
*/
app.listen(3000, () => {
    console.log("server is running on port : 3000");
});