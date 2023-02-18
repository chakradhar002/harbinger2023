

let logArrTypes = function (arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

let typeOfElement = function (element) {
    console.log(`${element} is a ${typeof (element)}`);
}

const arr = [1, "Hi", true, { color: "green" }];
logArrTypes(arr, typeOfElement);