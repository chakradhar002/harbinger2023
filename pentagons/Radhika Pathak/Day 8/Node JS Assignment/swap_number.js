let express = require('express');
let app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended : true
}))
/**
 * @description to load the html page get method is used
 */
app.get('/',function(req,res){
    res.sendFile(__dirname + '/Q1_swap_number.html');
});
/**
 * @description post method is used to process the logic and finding the desired result 
 */
app.post('/',(req,res)=>{
    let number1 = req.body.number1;
    let number2 = req.body.number2;
    [number1, number2] = [number2, number1];
    res.send(`After swapping:\n Number 1=${number1} and Number 2=${number2}`);
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});