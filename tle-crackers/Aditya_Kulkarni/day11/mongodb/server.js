// importing dependancies
const express = require("express")
const bodyParser = require("body-parser")
const employeeController = require("./controller/employeeController")

const app = express()

// setting up bodyparser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// defining the employee route
app.use("/employee", employeeController)

// listening at port 2000
app.listen(2000, () => {
	console.log("Server started at port 2000")
})
