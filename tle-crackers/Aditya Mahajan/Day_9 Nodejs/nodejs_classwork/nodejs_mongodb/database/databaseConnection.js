/**
 * @author Aditya Mahajan
 */

const mongoose = require('mongoose')

// const url = "mongodb://localhost:27017/test1"
// const mongocontroller = require('../controller/controller')       // alternative to below connection

// mongoose.connect(url, { useNewUrlParser: true })
// const con = mongoose.connection;
// con.on('open', function () {
//     console.log("mongo connected")
// })

mongoose.set("strictQuery", false)

// connection for mongoDB and nodejs
mongoose.connect('mongodb://127.0.0.1:27017/test1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection secussfull");
}).catch((e) => console.log("no connection"))

// defining schema
const mySchema = new mongoose.Schema({
    name: String,
    age: Number
})


module.exports = mongoose.model('users', mySchema)

