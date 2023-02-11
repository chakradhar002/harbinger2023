// Require mongoose module
const mongoose = require("mongoose");

// Set Up the Database connection
mongoose.connect("mongodb://localhost:27017/herbinger", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
	name: String,
	age: Number,
});

// Defining userSchema model
const User = mongoose.model("User", userSchema);

const updateDoc = async () => {

	// Finding document object using doc _id
	const doc = await User.findById("63e5f4a5ed2616b708ec84b3");

	const output = await doc.update({ name: "chakradhar" })
	console.log(output)
}

updateDoc();
