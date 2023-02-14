/**
 * function called removeShortWords that takes in an array and returns an array with all strings 
 * containing fewer than 4 characters removed.
 * @param {*} array 
 * @param {*} callback 
 * @returns 
 */
let myFilter = function (array, callback) {
    return array.filter(callback)
}

function removeShortWords(str) {
    if (str.length > 4) {
        return str;
    }
}

const arr = ["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that", "conforms", "to", "the", "ECMAScript", "specification"]
console.log(myFilter(arr, removeShortWords))

