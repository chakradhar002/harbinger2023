// a. Write a function forEachElem that takes in an array and a callback. Call the callback on each element in the array.

// Input: [1,4,5,6], (elem) => console.log("$" + elem)

// b. Create a function logEachElem that takes an array as an argument logs every element in the input array. Use forEachElem inside the body of your function.

// Input: [1,2,34]

// c. Create a function logArrTypes that uses the forEachElem method to log each array element followed by its type.

// Input: [1,"Hi", true, {color: "green"}]

console.log("\n** Callback Function Assignment || Question 6 \n**");

function forEachElem(array, callback) {
  callback(array);
}

function callbackOnEachElem(array) {
  for (let i in array) {
    console.log(array[i]);
  }
  console.log("\n");
}

function logEachElem(array) {
  for (let i in array) {
    console.log(array[i]);
  }
  console.log("\n");
}

function logArrTypes(array) {
  for (let i in array) {
    console.log(`${array[i]} is a ${typeof array[i]}`);
  }
  console.log("\n");
}

let array1 = [1, 4, 5, 6];

let array2 = [1, 2, 34];

let array3 = [1, "Hi", true, { color: "green" }];

forEachElem(array1, callbackOnEachElem);

forEachElem(array2, logEachElem);

forEachElem(array3, logArrTypes);

let a = 6;
console.log(a);
