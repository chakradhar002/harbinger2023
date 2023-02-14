console.log("Write a function that take in a number and two callbacks.");
/**
 *a function that take in a number and two callbacks. It should apply the first callback to the number, then
 *the second callback, then return the result
 * @param  number 
 * @param  callback1 
 * @param callback2    
 */

let callbackMultiple = function (number, callback1, callback2) {
    let a = callback1(number);
    let b = callback2(a);
    return b;
}

let add = function (num) {
    return num + 3;
}

let multiply = function (num) {
    return num * 2;
}
console.log(callbackMultiple(5, add, multiply))