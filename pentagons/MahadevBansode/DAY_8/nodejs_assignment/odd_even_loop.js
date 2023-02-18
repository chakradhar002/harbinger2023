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
* @description The app.listen() function is used to bind and listen the connections on the specified host 
* and port : 3000
* @param port
* @param callbackfunction()
*/
app.listen(3000,()=>{
    console.log("server is running on port : 3000");
});