const mongoose=require('mongoose');
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
//define new record
//var obj= new User({name:"Radhika" , age:22})

User.insertMany([
    {name :"Shreya" , age: 23},
    {name :"Shruti" , age: 30}
]);