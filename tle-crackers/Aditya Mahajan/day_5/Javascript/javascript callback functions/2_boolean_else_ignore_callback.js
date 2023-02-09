/**
 * 
 * @param {void} callback 
 * @param {boolean} call_back 
 */
var callback_call = (callback, call_back) => {
    if (call_back) {
        callback();
    } else {
        console.log("Ignoring the callback!");
    }
}

function callback_Function() {
    console.log("Hello");
}


callback_call(callback_Function, true)
callback_call(callback_Function, false)