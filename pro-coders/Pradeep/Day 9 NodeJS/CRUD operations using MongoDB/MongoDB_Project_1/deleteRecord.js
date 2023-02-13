const mongoose = require('mongoose');
mongoose.set('strictQuery', true);


mongoose.connect('mongodb://localhost:27017/Pradeep',{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{

console.log("connection succefull");

}).catch((e)=>console.log(e));


const userSchema = new mongoose.Schema(
    {name : String, age : Number}
)

const User = mongoose.model('User', userSchema);

const deletedoc = async () => {
    const doc = await User.findById('63e913493f6ce7d472d2c4b6');
    const fAge = await User.find({age : 29});
    console.log(fAge);

    const output = await doc.remove();
    console.log("Following record is deleted :- ");
    console.log(output);
};

deletedoc();