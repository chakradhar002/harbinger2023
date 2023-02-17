const mongoose = require('mongoose');
mongoose.set("strictQuery",false)
// use 127.0.0.1 in place of localhost
mongoose.connect('mongodb://127.0.0.1:27017/test', {
        useNewUrlParser: true, 
        useUnifiedTopology:true
}).then(()=>{
    console.log("connection Sucessfull !!");
}).catch((e)=>console.log("Connection Failed !!"))

const userSchema = new mongoose.Schema( 
    { name: String, 
        age: Number}
)

const User  = mongoose.model('User', userSchema);

var myobj  = new User({ name : 'Vishal' , age : 23});

myobj.save(function (err, myobj){
    if (err) return console.error(err);
    console.log(myobj.name+" saved to the Collections");
});

