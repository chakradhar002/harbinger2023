// Write a function that take in a number and two callbacks. It should apply the first callback to the number, then the second callback, then return the result

// Input: 4, (num) => num + 3, (num) => num * 2

// Output: 14

console.log("\n** Callback Function Assignment || Question 4 \n**");

function callbackFunction(number, callback1, callback2) {
  return callback2(callback1(number));
}

let c1 = (number) => {
  return number + 3;
};

let c2 = (number) => {
  return number * 2;
};
console.log(callbackFunction(4, c1, c2));
