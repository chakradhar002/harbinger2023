let arr1 = [3, 5, 6];
function timesThree(num) {
  return num * 3;
}

function myMap(array, callBack) {
  let output = [];
  for (i = 0; i < array.length; i++) {
    output.push(callBack(array[i]));
  };

  return output;
}

console.log(myMap(arr1, timesThree));


let arr2 = ["The", "internet", "is", "not", "a", "big", "truck.", "It's", "a", "series", "of", "tubes"];

function allCaps(array) {
  return array.toUpperCase();
};

console.log(myMap(arr2, allCaps));