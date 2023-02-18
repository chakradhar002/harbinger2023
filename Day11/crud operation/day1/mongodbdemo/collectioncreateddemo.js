// Require mongoose module
const mongoose = require('mongoose');

// Set Up the Database connection
//'mongodb://127.0.0.1:27017/herbinger'
mongoose.connect(
	'mongodb://127.0.0.1:27017/herbinger', {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

// Defining User schema
const userSchema = new mongoose.Schema(
	{ name: String, age: Number }
)

// Defining User model
const User = mongoose.model('User', userSchema);

// Create collection of Model
User.createCollection().then(function (collection) {
	console.log('Collection is created!');
});
