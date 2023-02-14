// Write a function that takes in a callback and calls the callback

// Input:
// function() { console.log("Hello!") }

// Output:
// Logs "Hello!" to the console

console.log("\n** Callback Function Assignment || Question 1 \n**");

function callbackFunction(callback) {
  callback();
}

callbackFunction(() => {
  console.log("\nHello");
});
