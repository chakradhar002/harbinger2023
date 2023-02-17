console.log("Write a function that take in a number and two callbacks.");
/**
 * number on which we will perform operations
 * @param {number} num 
 * @param {*} callback1 
 * @param {*} callback2 
 * @returns 
 */
function Twocallbacks(num,callback1,callback2)
{
    let a = callback1(num);
    let b = callback2(a);
    return b;

}
function add(num)
{
    return num+3;
}
function multiply(num)
{
    return num*2;
}
console.log(Twocallbacks(4,add,multiply))