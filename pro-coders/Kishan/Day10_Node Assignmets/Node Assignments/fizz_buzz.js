let express = require('express');
let app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({
    extended: true
}))

/**
 * @description post method 
 * @param req
 * @param res
 */
app.post('/', (req, res) => {
    /**
    * @description number is getting by postman
    * if number is divisible by 3 => print 'fizz'
    * if number is divisible by 5 => print 'Buzz'
    * if number is divisible by 3 or 5 => print 'fizzBuzz'
    * if number is NOT divisible by 3 or 5 => print the integer
    * if given input is not a number => Nan - not a number! please enter integer
    */
    let number = req.body.number;
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
* @description server is start on port : 3000
*/
app.listen(3000, () => {
    console.log("server is running on port : 3000");
});