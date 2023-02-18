const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect(
    "mongodb://127.0.0.1:27017/herbinger",{
        useNewUrlParser: true,

        useUnifiedTopology: true
}).then(()=>{

    console.log("connection successful");
}).catch((e)=>console.log("connection "))

const user = new mongoose.Schema({
    name : String,
    age : String
})

let schemaUser = mongoose.model('userschema', user);

schemaUser.createCollection();