const mongoose = require('mongoose');
mongoose.set("strictQuery",false)
// use 127.0.0.1 in place of localhost
mongoose.connect('mongodb://127.0.0.1:27017/test', {
        useNewUrlParser: true, 
        useUnifiedTopology:true
}).then(()=>{
    console.log("connection secussfull");
}).catch((e)=>console.log("no connection"))

const userSchema = new mongoose.Schema( 
    { name: String, 
        age: Number}
)

const User  = mongoose.model('User', userSchema);

User.createCollection().then(function (collection) {
     console.log("Collection is created!");
});

