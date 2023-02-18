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

    let number = req.body.number1;
    let answer = "";

    const truthyFalsy = (arr) =>{
        let truthy = 0;
        for(let x of arr){
            if(x!=undefined && x!=false && x!=0 && x!=null && x!="" && x!=NaN)
                truthy++;
        }
        return truthy;
    }
})
/**
* @description server is start on port : 3000
*/
app.listen(3000,()=>{
    console.log("server is running on port : 3000");
});