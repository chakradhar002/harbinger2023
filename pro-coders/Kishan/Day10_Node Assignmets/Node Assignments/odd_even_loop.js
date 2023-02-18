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
    /**
    * @description checks number till given input is odd or even.
    * 
    */
    for(let i=0 ; i<=number ; i++){
        if(i%2 == 0 )
            answer += `${i} : Even \n  `;
        else
        answer += `${i} : Odd \n  `;
    }
    res.send(answer);
})
/**
* @description server is start on port : 3000
* @param port
* @param callbackfunction()
*/
app.listen(3000,()=>{
    console.log("server is running on port : 3000");
});