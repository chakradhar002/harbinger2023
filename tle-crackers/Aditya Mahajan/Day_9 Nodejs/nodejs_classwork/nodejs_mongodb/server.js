/**
 * @author Aditya Mahajan
 */

// importing libraries and dependencies
const express = require('express')
const bodyparser = require('body-parser')
const app = express()

// controller file path
const custController = require('../nodejs_mongodb/controller/customerController')

// middlewares 
app.use(express.json())
app.use('/customers', custController)
// creating server
app.listen(3000, () => {
    console.log("server connected at port 3000")
})