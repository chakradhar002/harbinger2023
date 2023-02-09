
let logEachElem = function (arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

let logPrint = function (element) {
    console.log(element);
}

const arr = [10, 20, 11]
logEachElem(arr, logPrint);
