// Write a function that takes in a callback and a number. It should call the callback that many times.

// Input: () => console.log("I am being called"), 4

// Output:
// Logs:
// "I am being called"
// "I am being called"
// "I am being called"
// "I am being called"

console.log("\n** Callback Function Assignment || Question 3 \n**");

function callbackFunction(callback, iteration) {
  for (let i = 0; i < iteration; i++) {
    callback();
  }
}

callbackFunction(() => {
  console.log(`I am being called`);
}, 4);
