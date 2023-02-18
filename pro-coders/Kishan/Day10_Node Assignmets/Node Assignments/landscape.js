let express = require('express');
let bodyParser = require('body-parser');

let app = express();
/**
 * @description bodyParser. json returns middleware that only parses JSON
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
/**
 * @description post method is used
 * @param req
 * @param res
 */
app.post('/',(req,res)=>{
    /**
    * checks weather landscape or not
    */
    let height = req.body.number1;
    let width = req.body.number2;

    if(width > height)
        res.send(`Landscope : True`);
    else
        res.send(`Landscape : False`);
});

/**
 * @description server is start on port : 3000
 */
app.listen(3000,()=>{
    console.log(`server is running on port : 3000`);
})