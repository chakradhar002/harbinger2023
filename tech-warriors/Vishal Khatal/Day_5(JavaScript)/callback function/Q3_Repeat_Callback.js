console.log("Write a function that takes in a callback and a number. It should call the callback that many times.");
/**
 * number to callback that much time
 * @param {number} num 
 * @param {*} callback 
 */
function Re1(num,callback)
{
    for(let i=0;i<num;i++)
    {
        callback();
    }
}
function Rep2()
{
    console.log("I am being called");
}
Re1(5,Rep2)