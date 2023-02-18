/**
 * 
 * @param {number} num 
 * @param {Function} callback_1 
 * @param {Function} callback_2 
 * @returns num - returns new value of num after processing through callback_1 and callback_2
 */
function two_callbacks(num, callback_1, callback_2) {
    return callback_2(callback_1(num));
}

function addition(num) {
    return num + 3;
}
function multiply(num) {
    return num * 2;
}

console.log(two_callbacks(4, addition, multiply));