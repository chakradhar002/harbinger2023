console.log("Write a function that takes in a callback and a number. It should call the callback that many times.");
/**
 * number to callback that much time
 * @param {number} num 
 * @param {*} callback 
 */
function Repeat1(num,callback)
{
    for(let i=0; i < num; i++)
    {
        callback();
    }
}
function Repeat2()
{
    console.log("function is being called");
}
Repeat1(5,Repeat2)