/**
 * function allCaps that takes in an array as an argument, and uses the myMap function to return 
 * all the elements capitalized.
 * @param {*} arr 
 * @param {*} callback 
 * @returns 
 */

let myMap = function (arr, callback) {
    let secondArray = [];
    for (let i = 0; i < arr.length; i++) {
        secondArray.push(callback(arr[i]));
    }
    return secondArray;
}

let allCaps = function (arr) {
    return arr.toUpperCase();
}

const letters = ["The", "internet", "is", "not", "a", "big", "truck.", "It's", "a", "series", "of", "tubes"];

console.log(myMap(letters, allCaps));