/**
* @author Mahadev Bansode
* @Team Pentagon
*/
let express = require('express');
let app = express();
const bodyParser = require('body-parser');

/**
* @description bodyParser. json returns middleware that only parses JSON
*/
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
}))

/**
 * @description get method loads the accept_one_variable.html file on browser.
* accept_one_variable.html is used to accept number from user through html form.
* @param request
* @param response
 * 
 */
app.get('/',function(req,res){
    res.sendFile(__dirname + '/accept_one_variable.html');
});

/**
* @description post method loads the processed data on browser.
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
* @description The app.listen() function is used to bind and listen the connections on the specified host 
* and port : 3000
* @param port
* @param callbackfunction()
*/
app.listen(3000,()=>{
    console.log("server is running on port : 3000");
});