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

    let number = req.body.number1;
    let sum = 0;
    for (let i = 0; i <= number; i++) {
        if (i % 3 == 0 || i % 5 == 0)
            sum = sum + i;
    }
    res.send(`sumOfMultipleOf 3 and 5 upto ${number} = ${sum}`);
})
/**
* @description server is start on port : 3000
*/
app.listen(3000, () => {
    console.log("server is running on port : 3000");
});