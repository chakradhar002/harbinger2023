/**
 * @description require mongoose
 */
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

/**
 * c@description Connection mongoose
 */
mongoose.connect(
    'mongodb://localhost:27017/Mangodb', 
    { useUnifiedTopology : true, useNewUrlParser : true , }
    ).then(() =>{
        console.log("Connection successfull");
    }).catch((e) => console.log("No connection "+e))

    /**
     * @description UserSChema
     */
const userSchema=new mongoose.Schema({
                    name:String,
                    age:Number
})

const User=mongoose.model('User',userSchema);

var myobj = new User({ name: "Kishan", age: 23 });

myobj.save(function(err,myobj){
    if(err) return console.error(err);
    console.log("Saved of collection")
})