"use strict";
// function addTwo (num){
//     return num + 2
// }
exports.__esModule = true;
// addTwo(5)
//  // addTwo("5") -> should give error
function addTwo(num) {
    return num + 3;
}
addTwo(2);
// adding  a return type 
function getUpper(val) {
    return val.toUpperCase();
}
//let num : number= getUpper("toUpperCase") -> wrong
var values = getUpper("Hello");
function signUpUser(name, email, password) {
}
signUpUser("Aditya", "aditya.k@mygemail.com", "123");
var loginUser = function (name, email, password) {
    if (password === void 0) { password = "Hello"; }
};
var getHello = function (s) { return ""; };
