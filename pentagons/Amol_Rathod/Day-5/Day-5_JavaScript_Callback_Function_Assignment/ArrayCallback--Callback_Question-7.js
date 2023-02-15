// a. Write a function called myMap that takes in an array and a callback as arguments. It should return a new array with the callback applied to each element in the array.

// Input: [3,5,6], function(num) { return num * 3 }

// Output: [9, 15, 18]

// b. Create a function allCaps that takes in an array as an argument, and uses the myMap function to return all the elements capitalized.

// Input: ["The", "internet", "is", "not", "a", "big", "truck.", "It's", "a", "series", "of", "tubes"]

// Output:

// [
//     'THE', 'INTERNET',
//      'IS',      'NOT',
//       'A',      'BIG',
//  'TRUCK.',     "IT'S",
//       'A',   'SERIES',
//      'OF',    'TUBES'
// ]

console.log("\n** Callback Function Assignment || Question 7 \n**");

function myMap(array, callback) {
  callback(array);
}

function newArray(array1) {
  for (let i in array1) {
    console.log(`${array1[i] * 3}`);
  }
  console.log("\n");
}

let array1 = [3, 5, 6];

myMap(array1, newArray);

let array2 = [
  "The",
  "internet",
  "is",
  "not",
  "a",
  "big",
  "truck.",
  "It's",
  "a",
  "series",
  "of",
  "tubes",
];

function allCaps(array2) {
  for (let i in array2) {
    console.log(`${array2[i].toUpperCase()}`);
  }
}

myMap(array2, allCaps);
