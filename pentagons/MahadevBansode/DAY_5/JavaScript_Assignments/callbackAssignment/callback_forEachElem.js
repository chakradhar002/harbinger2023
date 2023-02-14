/**
 * function forEachElem that takes in an array and a callback. Call the callback on each element in the array.
 * @param array
 * @param callback function
 *  
 */

let forEachElem = function (arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

let print = function (element) {
    console.log(element)
}

const arr = [3, 1, 2, 211]
forEachElem(arr, print);