/**
 * function that takes in a callback and calls the callback
 */

let helloWorld = function () {
    console.log("Hello world using callback function");
}

let callback = function (helloWorld) {
    helloWorld();
}

callback(helloWorld);