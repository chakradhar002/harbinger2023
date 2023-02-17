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
const User = mongoose.model('User',userSchema);

var myobj = new User ({name : "Anny",age : 23})

myobj.save(function (err,result){
    if(err) return console.error(err);
    console.log("saved to collection.");
});