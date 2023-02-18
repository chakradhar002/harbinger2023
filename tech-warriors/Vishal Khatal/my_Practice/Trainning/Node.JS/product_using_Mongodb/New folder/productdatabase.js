const mongoose = require('mongoose');
mongoose.set("strictQuery",false)
// use 127.0.0.1 in place of localhost
mongoose.connect('mongodb://127.0.0.1:27017/product', {
        useNewUrlParser: true, 
        useUnifiedTopology:true
}).then(()=>{
    console.log("connection secussfull");
}).catch((e)=>console.log("no connection"))

const userSchema = new mongoose.Schema( 
    { name: String, 
      price: Number,
      color : String,
      description:String,
      category:String
    }
)

module.exports = mongoose.model("item",userSchema);