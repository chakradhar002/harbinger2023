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
     * @description UserSchema
     */
const userSchema=new mongoose.Schema({
                    name:String,
                    age:Number
})

const User=mongoose.model('User',userSchema);

User.find({ _id: '63e60e3e5cd1719d7685a5dc'}, function (err, docs) {
    if (err){
        console.log(err);
    }
    else{
        console.log("First function call : ", docs[0].name);
    }
});