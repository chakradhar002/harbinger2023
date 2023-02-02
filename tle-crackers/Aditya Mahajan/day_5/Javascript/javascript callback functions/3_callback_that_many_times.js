/**
 * 
 * @param {void} callback 
 * @param {number} num 
 */

function call_back(callback, num) {
    for (let i = 0; i < num; i++) {
        callback();
    }
}
function call_callback() {
    console.log("I am being called");
}
call_back(call_callback, 5);