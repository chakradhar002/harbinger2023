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
    /**
    * @description prints all prime numbers of input range
    * @param range
    */
    let range = req.body.number1;
    let primeFlag;
    let ans = "";
    for(let i=2 ; i<=range ; i++){
        primeFlag=0;
        for(let j=2 ; j<=i/2 ; j++){
            if(i%j == 0){
                primeFlag = 1;
                break;
            }
        }
        if(primeFlag == 0)
            ans += i+" ";
    }
    res.send(ans);
})
/**
* @description server is start on port : 3000
*/
app.listen(3000,()=>{
    console.log("server is running on port : 3000");
});