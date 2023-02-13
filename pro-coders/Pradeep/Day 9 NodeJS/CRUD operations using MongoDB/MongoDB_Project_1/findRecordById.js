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

const findDocById = async () => {
    console.log("Find Record by Id :- ");
    const byId = await User.findById('63e6195cb1c1a56ecf3a7670');
    console.log(byId);

    //const output = await doc.remove();
    console.log("Find Record by name :- ");
    const byName = await User.find({name : 'PKKK'});
    console.log(byName);
    //incomplete

    //const doc = await User.findOne(query, options);
    //console.log(doc);
};

findDocById();
