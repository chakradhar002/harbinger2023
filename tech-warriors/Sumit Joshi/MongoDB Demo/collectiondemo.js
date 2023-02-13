const mongoose = require('mongoose')
mongoose.set('strictQuery',false)
//Set up database
mongoose.connect('mongodb://localhost:27017/harbinger',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connection Successful");
}).catch((e)=>console.log("NO connection"))

const userSchema = mongoose.Schema({
    name : String, 
    age : Number
})
const user = mongoose.model('user',userSchema);
user.createCollection().then(function(collection){
    console.log("Collection created");
});
