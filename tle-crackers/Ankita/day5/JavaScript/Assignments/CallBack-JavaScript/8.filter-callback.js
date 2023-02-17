let arr1 = [1, 4, 6, 7, -3];

function myFilter(array, callBack) {

  return array.filter(callBack);
};

function arrFilter(num) {
  return num < 5;
}

console.log(myFilter(arr1, arrFilter));

let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];


function removeEvenNumbers(num) {
  if (num % 2 !== 0) {
    return num;
  }
};

console.log(myFilter(arr2, removeEvenNumbers));

let arr3 = ["JavaScript", "is", "a", "high-level,", "interpreted",
"programming", "language", "that", "conforms", "to", "the", "ECMAScript",
"specification"]


function removeShortWords(arr) {
  if (arr.length > 4) {
    return arr;
  }
}


console.log(myFilter(arr3, removeShortWords));