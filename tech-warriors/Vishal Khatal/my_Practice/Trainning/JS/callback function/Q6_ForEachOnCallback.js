console.log("Write a function forEachElem that takes in an array and a callback.");
console.log("{A}");
arr1 = [1,4,5,6]
/**
 *  on which we will perform operations
 * @param {array on which we will perform operations} arr1 
 * @param {*} callback 
 */
function For_Each(arr1,callback)
{
    for(let i =0;i<arr1.length;i++)
    {
        callback(arr1[i]);
    }
}
function show(i)
{
    console.log(i)
}
For_Each(arr1,show);

console.log("{B}");
arr2 = [1,2,34]
function logshow(i)
{
    console.log(i)
}
For_Each(arr2,logshow);

console.log("{C}")

let arr3 = [1,"Hi", true, {color: "green"}]

function Arra(nums){
    console.log(`${nums} is a ${typeof(nums)}`)
}

For_Each(arr3,Arra)