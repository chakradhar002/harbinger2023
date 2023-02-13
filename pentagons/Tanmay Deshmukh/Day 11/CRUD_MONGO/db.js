
const mongoose = require('mongoose')
mongoose.set('strictQuery',false)


/**
 * 
 * SCHEMA FOR CONNECTING TO DB
 * 
 */

mongoose.connect('mongodb://localhost:27017/mongodbStu',{useNewUrlParser:true,useUnifiedTopology:true}).then(
  () =>{
      console.log("connection done")
  }).catch((e) => console.log("no connection"))



/**
 * SCHEMA FOR CREATING COLLECTION
 * 
 */


  const userSchema = new mongoose.Schema(
    {
        name:String,
        age: Number
    }
)


/**
 * 
 * STUDENT COLLECTION
 */

const Student = mongoose.model('Student',userSchema)


/**
 * TO CREATE NEW COLLECTION
 * 
 */

// Student.createCollection().then(function(collection){
//        console.log("collection Created")})



  module.exports = Student; 