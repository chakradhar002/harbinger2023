const mongoose=require('mongoose');
const con = require('./server');
mongoose.set('strictQuery',false);

mongoose.connect('mongodb://localhost:27017/myharbinger',{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("Connection Successfull");
}).catch((e)=>console.log("No connection"+e));

const userSchema = new mongoose.Schema(
    {name:String , age:Number}
)

const User = mongoose.model('User',userSchema);

let updateQuery = async ()=>{
    let updateQueryResult = await User.findById('63e626d52623dc052ba3e6b9').update({name : 'Samantha'})
    console.log("Updated : ", updateQueryResult)
}
updateQuery();