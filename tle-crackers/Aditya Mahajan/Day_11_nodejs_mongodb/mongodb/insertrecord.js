const mongoose = require('mongoose');
mongoose.set("strictQuery", false)

mongoose.connect('mongodb://127.0.0.1:27017/test1', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection secussfull");
}).catch((e) => console.log("no connection"))

// defining user schema
const userSchema = new mongoose.Schema(
    {
        name: String,
        age: Number
    }
)

// passing values for storing in database
const User = mongoose.model('User', userSchema);

// saving the above values in our collection
User.createCollection().then(function (collection) {
    console.log("Collection is created!");
});

var myobj = new User({ name: 'aditya', age: 22 });

myobj.save(function (err, myobj) {
    if (err) return console.error(err);
    console.log(myobj.name + "saved to collection");
})

