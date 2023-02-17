const express = require('express')
const bodyParser = require('body-parser')
 
const app = express()
 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
 
app.get('/', (req, res) => {
  res.send('Hello World!')
})
 
app.post('/', (req, res) => {
    let data = req.body;
    res.send('Data Received: ' + JSON.stringify(data));
})
 
 
app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})