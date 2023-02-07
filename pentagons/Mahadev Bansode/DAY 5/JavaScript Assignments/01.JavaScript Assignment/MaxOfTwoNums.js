/**
 * function return maximum between two numbers
 * @param number1
 * @param number2
 */

const { exit } = require("process");

let max = function(number1 , number2){
    if(number1 == number2){
        console.log("both numbers are equal");
        return;
    }
    if(number1 >= number2)
        return number1;
    return number2;
}

console.log("maximum number = ",max(0,0));