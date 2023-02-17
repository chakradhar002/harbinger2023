// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/mydatabase',{
//     useNewUrlParser :true,
//     useUnifiedTopology :true
// })

// const userSchema = new mongoose.Schema({name:String,age:Number})

// const User = mongoose.model('User',userSchema);

// User.createCollection().then(function(collection){
//     console.log("collection is created");
// })

const mongoose = require('mongoose');
mongoose.set("strictQuery", false)

mongoose.connect('mongodb://127.0.0.1:27017/test1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection secussfull");
}).catch((e) => console.log("no connection"))

const userSchema = new mongoose.Schema(
    {
        name: String,
        age: Number
    }
)

const User = mongoose.model('User', userSchema);

User.createCollection().then(function (collection) {
    console.log("Collection is created!");
});
