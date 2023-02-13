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
// var User  = require('../dbConnection/dbConnection');

function insertRecords(req,res){
    const name=req.body.name;
    const age=req.body.age;
    var myobj = new User({ name: name, age: age });

    myobj.save(function(err,myobj){
        if(err) return console.error(err);
        console.log("Saved of collection")
       res.send('Data inserted successfuly')

    })
}

/**
 * @description get Employee Details By Id
 * @param {*} req 
 * @param {*} res 
 * @param {*} id 
 */
const getEmployeeDetailsById=(req, res)=>{
    const id=req.body.id;
    User.find({ _id: id}, function (err, docs) {
        if (err){
            console.log(err);
        }
        else{
            res.send(docs[0]);
        }
    });
  }

  /**
 * @description this function is delete by id
 */
const deleteDataById=(req,res)=>{
    const id=req.body.id;
     User.deleteOne({ _id: id }).then(function(){
        res.send("Data deleted "); // Success
    }).catch(function(error){
        console.log(error); // Failure
    });
  }
const updateRecordById= async(req,res)=>{
    const id=req.body.id;
    const name= req.body.name;
    const document1 = await User.findById(id);
    const output = await document1.update({name: name});
    res.send( output);
}
module.exports = {
                    insertRecords,
                    getEmployeeDetailsById,
                    deleteDataById,
                    updateRecordById
                }