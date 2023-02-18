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
    let sum = Number(number1)+Number(number2);
    res.send(`Sum of ${number1} and ${number2} = ${sum}`);
})
/**
* @description server is start on port : 3000
*/
app.listen(3000,()=>{
    console.log("server is running on port : 3000");
});