const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

mongoose.connect('mongodb://localhost:27017/Pradeep', {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(() => {
    console.log("Connection Successfull. ");

}).catch((e) => console.log(e));

const userSchema = new mongoose.Schema(
    {name : String, age : Number}
);

const User = mongoose.model('User', userSchema);

const findDocByName = async() => {
    //const byName = await User.find({name : 'PKKK'});
    //console.log(byName);

    const byName = await User.find({name : 'PKKKKK'});
    if(byName == []) 
        console.log("Record doesnot exist !!");
    else 
        console.log("Following record found :- ");
        
    console.log(byName);
};

findDocByName();