console.log("----------A----------")
array_1 = [3, 5, 6]
/**
 * 
 * @param {Number} num - parameter passed to function
 * @returns num * 3 - print/return number multiplied by 3
 */

function multiple_of_3(num) {
    return num * 3
}

/**
 * 
 * @param {Array} array - array parameter passed to function
 * @param {Function} callback - variable of function type passed to function
 * @returns 
 */

function myMap(array, callback) {
    let new_array = [];
    for (let i in array) {
        new_array.push(callback(array[i]))
    }
    return new_array;
}
console.log(myMap(array_1, multiple_of_3))

console.log("----------B----------")

array_2 = ["The", "internet", "is", "not", "a", "big", "truck.", "It's", "a", "series", "of", "tubes"]

/**
 * 
 * @param {Array} array - array parameter passed to function
 * @returns array.toUpperCase - converts array to UPPERCASE letters and returns it
 */

function allCaps(array) {
    return array.toUpperCase()
}
console.log(myMap(array_2, allCaps))