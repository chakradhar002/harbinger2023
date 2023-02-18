console.log("Write a function that takes in a callback and calls the callback");

function myFunction()
{
    console.log("Hello world");
}
let callbackfunc = function(callback)
{
    callback();
}
callbackfunc(myFunction);