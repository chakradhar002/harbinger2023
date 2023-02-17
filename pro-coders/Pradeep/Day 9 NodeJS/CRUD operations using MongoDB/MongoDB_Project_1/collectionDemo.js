const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://localhost:27017/Pradeep',{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{

console.log("connection succefull");

}).catch((e)=>console.log(e));

const userSchema = new mongoose.Schema(
    {name: String, age: Number}
)

const User = mongoose.model('User', userSchema);

User.createCollection().then(function(collection) {
    console.log('Collection created');
})
