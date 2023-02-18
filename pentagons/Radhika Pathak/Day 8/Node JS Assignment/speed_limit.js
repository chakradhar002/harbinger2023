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
    res.sendFile(__dirname + '/Q5_speed_limit.html');
});
/**
 * @description post method is used to process the logic and finding the desired result 
 */
app.post('/',(req,res)=>{
    let speed=req.body.speed;
    var penalty_point = 0;
    if(speed.value<=70)
        {
            res.send(`Good Safe Driving`);
        }
        else
        {
            penalty_point++;
            if(penalty_point>5)
            {
                res.send(`Speed limit crossed by penalty point:${penalty_point}`);
            }
            else{
                res.send(`Licensce Suspended`);
            }
        }
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})