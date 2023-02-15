var express = require('express')
var app = express()

app.get('/',function(req,res){
    res.sendFile(__dirname+'/maxNo.html')
})

app.get('/maxNo',function(req,res){
    var num1 = req.query.num1;
    var num2 = req.query.num2;

    if(num1 > num2)
    {
        res.send("Number1 is Greater number : "+num1);
    }
    else{
        res.sendStatus("Number2 is Greater number : "+num2)
    }
});

app.listen(3000,()=>{
    console.log('running on port 3000')
})