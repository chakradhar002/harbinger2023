const mangoose = require('mongoose')

// setup database connection
mangoose.connect(
    'mongodb://localhost:27017/democollection',{
        useNewUrlParser : true,
        useUnifiedTopology : true
}).then()

// defining user schema
const userSchema = new mangoose.Schema(
    {name:String,age:Number}
)

//Default User model
const User = mangoose.model('User',userSchema);

//create collection of model
// User.createCollection().then(function(collection){
//     console.log('collection is created')
// })


var myobj = new User({name:'mycompany',age:24});

//save model 
myobj.save(function(err,myobj){
    if(err) return console.error(err);
    console.log(myobj.name+"Saved to collection")
})