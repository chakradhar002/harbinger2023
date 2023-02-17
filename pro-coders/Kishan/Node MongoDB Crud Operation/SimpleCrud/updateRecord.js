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

const updateRecord = async ()=>{
    const document1 = await User.findById('63e611bafb27c39a82114f79');
    const output = await document1.update({name: "Kisan"});
    console.log ( output);
}

updateRecord();