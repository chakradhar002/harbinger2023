const mongoose = require('mongoose');
mongoose.set("strictQuery",false)
// use 127.0.0.1 in place of localhost
mongoose.connect('mongodb://127.0.0.1:27017/test', {
        useNewUrlParser: true, 
        useUnifiedTopology:true
}).then(()=>{
    console.log("connection Sucessfull !!");
}).catch((e)=>console.log("Connection Failed !!"))

//Update code
 const userSchema = new mongoose.Schema(
    {
        name:String, 
        age:Number
    }
 );
 // defining schema

 const User  = mongoose.model('User',userSchema);

 const updatecode = async() =>{
    const doc = await User.findById("63e60f1f212988d4f1387799");
    const output = await doc.update({name:"Tom"})
    console.log("update name is "+output)
 }
 updatecode();