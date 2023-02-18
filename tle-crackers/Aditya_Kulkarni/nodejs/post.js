const express = require('express')
const bodyParser = require("body-parser")
const app = express()

app.use(bodyParser.urlencoded({extended : true}))

app.post("/" , (req , res)=>{
    const body = req.body
    console.log(body) 
})

app.listen(2000)