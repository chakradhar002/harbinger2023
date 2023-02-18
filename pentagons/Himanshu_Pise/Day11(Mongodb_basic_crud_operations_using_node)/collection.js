
const mongoose = require('mongoose');
mongoose.set('strictQuery',false)

//Setup Connection
//"mongodb://127.0.0.1:27017/harbinger"  connection url using default port of mongodb
//when this url won't work
mongoose.connect(
    "mongodb://127.0.0.1:27017/harbinger",{
        useNewUrlParser: true,
        useUnifiedTopology: true
}).then(()=>{

    console.log("connection successful");
}).catch((e)=>console.log("no connection "))

//Defining Schema
const userSchema = new mongoose.Schema(
    {name: String, age: Number}
)

//Defining The User Model
const User = mongoose.model('User',userSchema);

//Create Collection Model
User.createCollection().then(function(collection){
    console.log('Collection is Created!');
});