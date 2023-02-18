/**
 * @author Aditya Kulkarni
 */
const express = require('express')

const signUpController = require('./controllers/signUpController')
const customerController = require('./controllers/customerController')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/signup', signUpController)
app.use('/customer', customerController)
app.listen(2000, () => {
	console.log(`Server running at port 2000`)
})
