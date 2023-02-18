const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())

app.get('/', (req, res)=>{
    res.sendfile(__dirname + '/demo.html')
})


app.post("/form",(req,res)=>{
    const body = req.body.name;
    console.log(body);
})

app.listen(2000,()=>{
    console.log("listening at sever http://localhost:2000/");
})