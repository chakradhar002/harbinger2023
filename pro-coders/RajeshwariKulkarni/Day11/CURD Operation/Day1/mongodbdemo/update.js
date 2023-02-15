const mangoose = require('mongoose')

// setup database connection
mangoose.connect(
    'mongodb://localhost:27017/testSchema',{
        useNewUrlParser : true,
        useUnifiedTopology : true
}).then(()=>{
    console.log("connect sucessfully");
})

// defining user schema
const userSchema = new mangoose.Schema(
    {name:String,age:Number}
)

const User = mangoose.model('User',userSuserSchemachema)

const uppdaterecord = async()=>{
    const document1 = await User.findById('');
    const output = documnet1.update({name:"tom"})
    console.log("update name is : ",output)
};

updaterecord();