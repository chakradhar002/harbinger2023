const express = require('express') 
const bodyParser = require('body-parser')
const employeeRouter = require('./controllers/employeeController')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))


app.use('/employee' , employeeRouter)

app.listen(2000 , ()=> console.log("Server running at port 2000"))