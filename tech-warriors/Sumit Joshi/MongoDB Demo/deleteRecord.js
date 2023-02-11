const mongoose = require('mongoose')
mongoose.set('strictQuery',false)
mongoose.connect('mongodb://localhost:27017/harbinger',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connection Successful");
}).catch((e)=>console.log("NO connection"));
//Define the user schema
const userSchema = mongoose.Schema({
    name : String, 
    age : Number
});
const user = mongoose.model('user',userSchema);
let deleteQuery = async ()=>{
    let deleteRecord = await user.findByIdAndDelete("63e6137eab71e5eccb36d0c0");
    console.log("Deleted object is");
    console.log(deleteRecord);
};
deleteQuery();