const express = require('express')
const mongoose = require('mongoose')
const alienRouter = require('./controller')
var app = express()
// const url = 'mongodb://localhost/AlienDBex' // mongo db database url
// const app = express()

// mongoose.connect(url, {useNewUrlParser:true})
// const con = mongoose.connection
// con.on('open', () => {
//     console.log('connected...')
// })


app.use(express.json())
app.use('/aliens',alienRouter)

app.listen(9000, () => {
    console.log('Server started')
})