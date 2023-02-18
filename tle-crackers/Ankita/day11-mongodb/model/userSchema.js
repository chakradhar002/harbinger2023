const{Schema,model} = require('mongoose');

const userSchema = new Schema(
    {name : String, age : Number, city:String}
)

const Details =model("Details",userSchema)

module.exports ={Details}


