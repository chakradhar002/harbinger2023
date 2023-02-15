/**
 * Write a function called myFilter that takes in an array and a callback as arguments. The 
 * callback should take in an element and return a boolean. myFilter should return a new array with 
 * only values that return true when passed into the callback.
 * @param {*} array 
 * @param {*} callback 
 * @returns 
 */

let myFilter = function (array, callback) {
    return array.filter(callback)
}

let callFilter = function (element) {
    return element < 5
}

const arr = [2, 1, 4, 2, -19, 22, -1];
console.log(myFilter(arr, callFilter));