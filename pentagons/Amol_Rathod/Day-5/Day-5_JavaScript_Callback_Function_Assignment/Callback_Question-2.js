// Write a function that takes in a callback and a boolean. If the boolean is true, call the callback, otherwise log "Ignoring the callback" to the console.

// Input: () => console.log(""), true

// Output:
// Logs "" to the console

// Input: () => console.log("Testing"), false
// Output:
// Logs "Ignoring the callback" to the console.

console.log("\n** Callback Function Assignment || Question 2 \n**");

function callbackFunction(callback, booleanValue) {
  if (booleanValue) {
    callback();
  } else {
    console.log("Ignoring the callback");
  }
}

callbackFunction(() => {
  console.log(`Testing`);
}, false);
