// Require would make the prompt
// package available to use
const prompt = require("prompt");

// An utility function to add
// two numbers
function add() {
// Start the prompt
prompt.start();

// Get two numbers/properties
// from user num1 and num2
prompt.get(["num1", "num2"],
function (err, res) {
	// To handle any error if occurred
	if (err) {
	console.log(err);
	} else {
	// By default get methods takes
	// input in string So parseFloat
	// is used to convert String
	// into Float
	var sum = parseFloat(res.num1)
		+ parseFloat(res.num2);

	// Print the sum
	console.log("Sum of " + res.num1
		+ " and " + res.num2 + " is " + sum);
	}
});
}

// Calling add function
add();
