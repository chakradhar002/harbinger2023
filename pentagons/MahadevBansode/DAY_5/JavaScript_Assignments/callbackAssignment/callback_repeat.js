/**
 * repeatCall function calls callback function reapeatdly given number of times.
 * @param number 
 * @param callback 
 */
let repeatCall = function (num, callback) {

    for (let i = 0; i < num; i++) {
        callback();
    }
}
let callback = function () {
    console.log("I am being called");
}
repeatCall(5, callback)