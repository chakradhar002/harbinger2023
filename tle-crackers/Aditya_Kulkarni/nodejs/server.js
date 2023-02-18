const express = require('express')

const app = express()

app.get('/user' , (req , res) =>{
  res.send("Hello from get route")
})

app.listen(3000 , ()=>console.log("Server running at port 3000"))