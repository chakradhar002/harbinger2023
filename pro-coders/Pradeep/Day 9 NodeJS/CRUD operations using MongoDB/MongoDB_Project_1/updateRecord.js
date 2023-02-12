const mongoose = require('mongoose');
mongoose.set('strictQuery', true);


mongoose.connect('mongodb://localhost:27017/Pradeep',{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{

console.log("connection succefull");

}).catch((e)=>console.log(e));

// Define schema.
const userSchema = new mongoose.Schema(
    {name : String, age : Number}
)

const User = mongoose.model('User', userSchema);
const updatdoc = async () => {
    const doc = await User.findById('63e61af6d3170c8102145db1');
    const output = await doc.update({name : "ghyuuuu"});

    console.log(output);
};

updatdoc();