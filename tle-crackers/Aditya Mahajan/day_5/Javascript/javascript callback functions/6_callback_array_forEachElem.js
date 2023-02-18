console.log("--------==--A--==--------")
array_elements = [1, 2, 3, 4, 5];

/**
 * 
 * @param {Array} array - array parameter passed to function
 * @param {Function} callback - variable of function type passed to function
 */
function forEachElem(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i])
    }
}
function print_array(array_elements) {
    console.log(array_elements)
}

forEachElem(array_elements, print_array)

console.log("--------==--B--==--------")
let array_2 = [1, 2, 34]
/**
 * 
 * @param {Number} element - represent each element one by one into array
 */
function logEachelem(element) {
    forEachElem(element, print_array);
}
logEachelem(array_2);


console.log("--------==--C--==--------")
let array_3 = [1,"Hi", true, {color: "green"}];
/**
 * 
 * @param {Number} element - parameter which hold the elements in array
 */
function logArrayTypes(element){
    console.log(`${element} is a ${typeof(element)}`)
}
forEachElem(array_3,logArrayTypes);