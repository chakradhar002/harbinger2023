const mongoose = require('mongoose');
mongoose.set('strictQuery',false)
//mongodb://127.0.0.1:27017/ankita
mongoose.connect('mongodb://localhost:27017/ankita',{
    useNewUrlparser: true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection seccesful");

}).catch((e)=>console.log("no connection"))

//defining user schema
const userSchema = new mongoose.Schema(
    {name: String, age: Number}
)

//defining user model or set methods
const user = mongoose.model('User',userSchema);

//create collection
user.createCollection().then(function (collection){
    console.log('Collection created');
})
