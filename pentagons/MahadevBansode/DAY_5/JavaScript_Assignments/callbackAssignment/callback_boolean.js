/**
 * booleanCallBack function accepts two paramaters and call a passed function
 * @param {boolean} bool
 * @param callback
 */
let booleanCallBack = function (bool, callback) {

    if (typeof (bool) === "boolean") {
        callback();
    }
    else {
        console.log("Ignoring the callback");
    }
}

let callingFunction = function () {
    console.log('""');
}

booleanCallBack(true, callingFunction);