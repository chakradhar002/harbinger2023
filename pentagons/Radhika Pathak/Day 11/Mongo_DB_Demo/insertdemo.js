//const createSchema = require("./collectiondemo");
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

const User = mongoose.model('User',userSchema);
//define new record
//var obj= new User({name:"Radhika" , age:22})
var obj= new User({name:"Kshiti" , age:25})

obj.save(function(err,data){
    if(err) return console.error(err);
    console.log(obj.name+" saved to collection")
    console.log(data);
})