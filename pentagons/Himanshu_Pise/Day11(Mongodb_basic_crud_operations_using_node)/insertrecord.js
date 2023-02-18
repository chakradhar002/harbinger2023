const mongoose = require('mongoose');
mongoose.set('strictQuery',false)

//Setup Connection
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
const User = mongoose.model('User',userSchema)

//inserting  records
var myobj = new User({ name : 'xyz', age : '21'}) ;

myobj.save(function (err, myobj ){
    if (err) return console.error(err);
    console.log(myobj.name+ "saved to collection.");
});