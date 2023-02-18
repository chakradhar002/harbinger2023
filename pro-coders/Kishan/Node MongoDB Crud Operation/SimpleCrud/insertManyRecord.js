const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
/**
 * @description connecting mongoDB 
 */
mongoose.connect(
    'mongodb://localhost:27017/Mangodb', 
    { useUnifiedTopology : true, useNewUrlParser : true , }
    ).then(() =>{
        console.log("Connection successfull");
    }).catch((e) => console.log("No connection"))

/**
 * @description creating Schema  
 */
const userSchema=new mongoose.Schema({
                    name:String,
                    age:Number
})

const User=mongoose.model('User',userSchema);

/**
 * @description inserting many data by using inserMany() function
 */
User.insertMany([
    { name: 'Gourav', age: 20},
    { name: 'Kartik', age: 20},
    { name: 'Niharika', age: 20}
]).then(function(){
    console.log("Data inserted")  // Success
}).catch(function(error){
    console.log(error)      // Failure
});