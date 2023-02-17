const mongoose=require('mongoose');
mongoose.set('strictQuery',false);

//database connection
mongoose.connect('mongodb://localhost:27017/myharbinger',{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("Connection Successfull");
}).catch((e)=>console.log("No connection"+e));

//defining USer schema
const userSchema = new mongoose.Schema(
    {name:String , age:Number}
)
//creating schema
const User = mongoose.model('User',userSchema);

let deleteQuery = async()=>{
    let deleteQueryResult = await User.findByIdAndDelete('63e626d52623dc052ba3e6b9');
    console.log("Deleted :",deleteQueryResult);
}
deleteQuery();