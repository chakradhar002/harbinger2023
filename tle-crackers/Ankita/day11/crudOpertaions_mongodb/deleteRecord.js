const mongoose = require('mongoose');
mongoose.set('strictQuery',false)
//mongodb://127.0.0.1:27017/ankita
mongoose.connect('mongodb://localhost:27017/ankita',{
    useNewUrlparser: true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connection seccesful");

}).catch((e)=>console.log("no connection"))



//defining user schema
const userSchema = new mongoose.Schema(
    {name: String, age: Number}
)
const User = mongoose.model('User',userSchema);

const deleterecord = async ()=>{
    //finding document object using doc id
    const doc = await User.findByIdAndDelete('63e60ea8c5dc2acf298f05bf');

    // const output = await doc.update({name:"jenny"})
    // console.log(output)
};
deleterecord()

