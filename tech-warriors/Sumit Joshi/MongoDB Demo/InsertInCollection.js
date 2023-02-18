const mongoose = require('mongoose')
mongoose.set('strictQuery',false)
mongoose.connect('mongodb://localhost:27017/harbinger',{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Connection Successful");
}).catch((e)=>console.log("NO connection"))

//Define the user schema
const userSchema = mongoose.Schema({
    name : String, 
    age : Number
})
const user = mongoose.model('user',userSchema);
//define the record for the insert 
user.insertMany([{name:"Sumit",age:"23"},
                      {name:"Anushree",age:"22"},
                      {name:"Sangram",age:"23"},
                      {name:"Roshni",age:"23"}]).then(function(){
                        console.log("Data inserted");
                      }).catch(function(error){
                        console.log(error);
                      });
