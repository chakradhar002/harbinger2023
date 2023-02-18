const mongoose = require('mongoose');
mongoose.connect(
    'mongodb://localhost:27017/test', {
        useNewUrlParser: true, 
        useUnifiedTopology:true
})
const userSchema = new mongoose.Schema( 
    { name: String, age: Number}
)
const User  = mongoose.model('User', userSchema);

User.createCollection().then(function (collection) {
     console.log("Collection is created!");
});

