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
    let speed = req.body.number1;
    let point;
    /**
    * if speed is < 70 => prints 'Good Safe Driver'
    * if speed is > 70 every 5 km is penalty point => prints 'Speed limit crossed by penalty point'+point
    * if driver gets > 10 penalty points i.e above 120km => "Licence suspend"
    */
    if(speed < 70)
        res.send("Good Safe Driver");
    else
        if(speed > 70){
            let point = Math.floor((speed/5) - 14);
            if(point > 10)
                res.send("Licence suspend")
            else
                res.send(`Speed limit crossed by penalty point = ${point}`);
        }
})
/**
* @description server is start on port : 3000
* @param port
* @param callbackfunction()
*/
app.listen(3000,()=>{
    console.log("server is running on port : 3000");
});