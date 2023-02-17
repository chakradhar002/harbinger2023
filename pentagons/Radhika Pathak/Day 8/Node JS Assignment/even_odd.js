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
    res.sendFile(__dirname + '/Q6_even_odd.html');
});
/**
 * @description post method is used to process the logic and finding the desired result 
 */
app.post('/',(req,res)=>{
    let start = req.body.start;
    let end = req.body.end;
    for(let num=start;num<=end;num++)
        {
            if(num%2==0)
            {
                return res.send(`${num}:Even`);
                
            }
            else
            {
                res.send(`${num}:Odd`);
                
            }
        }
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})