const bodyParser = require("body-parser")
const express = require("express")
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/addTwo.html")
})

app.post("/addtwo", (req, res) => {
  let { num1, num2 } = req.body
  num1 = parseInt(num1)
  num2 = parseInt(num2)
  let sum = num1 + num2
  res.send(`sum of both numbers is ${sum}`)
})

app.listen(4000, () => console.log(`Server running at 4000`))
