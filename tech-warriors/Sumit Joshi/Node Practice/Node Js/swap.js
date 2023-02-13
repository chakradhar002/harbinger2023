let http = require('http')
const express = require('express')

const app = express();

app.get('/', (req, res)=>{
    let a = 10;

    let b = 30;

    a = a + b;
    b = a - b;
    a = a - b;

    res.send(`a = ${a} and b = ${b}`)
})



app.listen(2020, ()=>{
    console.log(`Server is listening on port http://localhost:2020`);
})