// var http = require('http')

// http.createServer(function(req,res){
//     var a= 20;
//     var b = 30;
//     var temp = a;
//     a = b;
//     b = temp;
//     res.write("Value of a = "+a+"   Value of B = "+b);
//     console.log(a,b)
//     res.end();
// }).listen(2000)

const express = require('express');
const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/swapNo.html')
});

app.post('/',(req,res)=>{
    const{number1,number2} = req.body;
    let output = number1;
    number1 = number2;
    number2 = output;
    res.send({
        number1,
        number2
    });
});

app.listen(3000,()=>{
    console.log('Exppress is running on port 3000')
})