const express = require('express')

const app = express()

app.get('/user',(req,res)=>{
    res.send('Hello from get')
})

app.listen(3000,()=>console.log("server is running at port 3000"))