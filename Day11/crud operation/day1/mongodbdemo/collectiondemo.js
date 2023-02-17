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
}).catch((e)=>console.log("no connection"))

// Defining User schema
const userSchema = new mongoose.Schema(
	{
     name: String,
      age: Number }
)

// Defining User model or set methods
const User = mongoose.model('User', userSchema);

// Create collection of Model or table
User.createCollection().then(function (collection) {
	console.log('Collection is created!');
});
