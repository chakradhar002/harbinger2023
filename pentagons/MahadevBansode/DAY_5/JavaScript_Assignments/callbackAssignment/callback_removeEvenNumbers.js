/**
 *  Write a function called removeEvenNumbers that takes in an array and returns an array with all 
 * the even numbers removed.
 * @param {*} array 
 * @param {*} callback 
 * @returns 
 */

let myFilter = function (arr, callback) {
    return arr.filter(callback)
}

let removeEvenNumbers = function (num) {
    if (num % 2 != 0) {
        return num
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(myFilter(arr, removeEvenNumbers))
