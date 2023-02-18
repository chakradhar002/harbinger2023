const studcontroller = require('../CRUD_MONGO/controller')
const express = require('express')
const bodyParser = require('body-parser')
var app = express();


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/student', studcontroller);

app.get('/',(req,res) => {
    res.sendFile('index.html',{root: __dirname })})

app.listen(1234, () => {
    console.log('GO to localhost:1234');
});
