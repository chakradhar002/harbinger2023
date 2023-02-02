console.log("Write a function that takes in a callback and calls the callback");

function Q1()
{
    console.log("Hello");
}
let cback = function(callback)
{
    callback();
}
cback(Q1);