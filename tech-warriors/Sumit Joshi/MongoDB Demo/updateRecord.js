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
user.createCollection().then(function(collection){
    console.log("Collection created");
})
var query = {name:"Roshni"}
var update = {age:"24"}
const updateDoc = async()=>{
    const doc = await user.findById('63e6137eab71e5eccb36d0c0')
    const output = await doc.update({name:"Gaurav"})
    console.log("Updated record is"+output);
};
updateDoc();