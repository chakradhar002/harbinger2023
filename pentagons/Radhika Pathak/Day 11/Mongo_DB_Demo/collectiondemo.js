//import mongoose module
const mongoose = require ('mongoose');
mongoose.set('strictQuery',false);

/**
 * if localhost doesn't work then use mongodb://127.0.0.1:27017/myharbinger
 */
var url = 'mongodb://localhost:27017/myharbinger';
//set up database connection
mongoose.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connection Successfull");
}).catch((e)=>console.log("No Connection"));

//creating user schema
const userSchema = new mongoose.Schema(
    {name:String , age:Number}
)

//creatig User Model i.e collection
const User = mongoose.model('User',userSchema);

//creating collection of model or table
User.createCollection().then(function(collection){
    console.log("Collection is created!!");
}).catch((e)=>console.log("No Connection Created"));

module.exports = User;