const mongoose = require('mongoose');
mongoose.set('strictQuery',false)

//Setup Connection
mongoose.connect(
    "mongodb://127.0.0.1:27017/harbinger",{
        useNewUrlParser: true,
        useUnifiedTopology: true
}).then(()=>{

    console.log("connection successful");
}).catch((e)=>console.log("no connection "+e))

//Defining Schema
const userSchema = new mongoose.Schema(
    {name: String, age: Number}
)


// //Defining The User Model
const User = mongoose.model('User',userSchema)

const updateRecord = async() =>{
    const document1 = await User.findById('63e60e942ccf33eea40f34f4').update({name : 'Amol'});
    console.log('Updated : ', document1);
};

updateRecord();
