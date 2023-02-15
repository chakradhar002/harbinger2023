/**
 * Write a function called myMap that takes in an array and a callback as arguments. It should 
 * return a new array with the callback applied to each element in the array.
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

let multiply = function (element) {
    return element * 3;
}

const arr = [3, 5, 6];
console.log(myMap(arr, multiply));