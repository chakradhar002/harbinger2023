// Require mongoose module
const mongoose = require('mongoose');
mongoose.set('strictQuery',false)


// Set Up the Database connection
mongoose.connect(
	'mongodb://localhost:27017/herbinger', {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(()=>{

    console.log("connection sucessfull");
}).catch((e)=>console.log("no connection"+e))

// Defining User schema
const userSchema = new mongoose.Schema(
	{ name: String, age: Number }
)

// Defining User model or set methods
const User = mongoose.model('User', userSchema);



//record  for insert
var myobj = new User({ name: 'mycompany', age:23});

 // save model to database
 myobj.save(function (err, myobj) {
    if (err) return console.error(err);
    console.log(myobj.name+" saved to collection.");
  });
 





