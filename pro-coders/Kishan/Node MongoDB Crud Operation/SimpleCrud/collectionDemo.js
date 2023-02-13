const mongoose = require("mongoose");
mongoose.set("strictQuery", false);


mongoose.connect(
    'mongodb://localhost:27017/Mangodb', 
    { useUnifiedTopology : true, useNewUrlParser : true , }
    ).then(() =>{
        console.log("Connection successfull");
    }).catch((e) => console.log("No connection"))


const userSchema=new mongoose.Schema({
    name:String,
    age:Number
})


const User=mongoose.model('User',userSchema);

User.createCollection().then(function(collection){
    console.log("collection successfully");
}).catch((e)=>{
    console.log(e)
})




