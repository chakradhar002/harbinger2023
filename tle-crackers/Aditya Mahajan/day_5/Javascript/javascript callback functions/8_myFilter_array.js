console.log("----------A---------")
array_1 = [3, 5, 6, 1, 2, 3, 4]
/**
 * 
 * @param {Number} num - parameter to callback function
 * @returns Number < 5 - prints/returns numbers smaller than 5
 */
function array_filter(num) {
    return num < 5
}

/**
 * 
 * @param {Array} array      - passing array argument to function
 * @param {Function} callback - variable of function type passed to function
 * @returns Filtered array 
 */
function myFilter(array, callback) {
    return array.filter(callback)
}
console.log(myFilter(array_1, array_filter))

console.log("----------B---------")
array_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * 
 * @param {Number} number - parameter passed to function. 
 * @returns number -  which are not even
 */
function removeEvenNumbers(number) {
    if (number % 2 != 0) {
        return number;
    }
}
console.log(myFilter(array_2, removeEvenNumbers))

console.log("----------C---------")
array_3 = ["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that", "conforms", "to", "the", "ECMAScript", "specification"];

/**
 * 
 * @param {string} word - parameter which is array of string
 * @returns string.length >= 4 - filters words whose length is greater than or equal to 4
 */
function removeShortWords(word) {
    if (word.length >= 4) {
        return word;
    }
}
console.log(myFilter(array_3, removeShortWords))
