// a. Write a function called myFilter that takes in an array and a callback as arguments. The callback should take in an element and return a boolean. myFilter should return a new array with only values that return true when passed into the callback.

// Input: [1,4,6,7, -3], num => num < 5
//
// Output:  [1, 4, -3]

// b. Write a function called removeEvenNumbers that takes in an array and returns an array with all the even numbers removed.

// Input: [1,2,3,4,5,6,7,8,9]
// Output: [1,3,5,7,9]

// c. Write a function called removeShortWords that takes in an array and returns an array with all strings containing fewer than 4 characters removed.

// Input: ["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that", "conforms", "to", "the", "ECMAScript", "specification"]

// Output:
// [ 'JavaScript',
//   'high-level,',
//   'interpreted',
//   'programming',
//   'language',
//   'that',
//   'conforms',
//   'ECMAScript',
//   'specification' ]

console.log("\n** Callback Function Assignment || Question 8 \n**");

const myFilter = (array, callback) => {
  let result = [];
  array.forEach((el) => (callback(el) ? result.push(el) : null));
  return result;
};

const removeEvenNumbers = (array) => myFilter(array, (e) => e % 2 != 0);

const removeShortWords = (array) => myFilter(array, (e) => e.length > 4);

console.log(myFilter([1, 4, 6, 7, -3], (e) => e < 5));
console.log(removeEvenNumbers([1, 4, 6, 7, -3]));
console.log(
  removeShortWords([
    "JavaScript",
    "is",
    "a",
    "high-level,",
    "interpreted",
    "programming",
    "language",
    "that",
    "conforms",
    "to",
    "the",
    "ECMAScript",
    "specification",
  ])
);
