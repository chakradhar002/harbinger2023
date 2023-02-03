//Function will take callback and display "Hello" in console 
function show() {
    console.log("Hello")
}
//assigned variable a to function
let a = function (callback) {
    callback()
}

a(show);

