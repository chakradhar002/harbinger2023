console.log("{A}");
arr = [3,5,6]; 
/**
 * to perform operations
 * @param {array} arr 
 * @param {*} callback 
 * @returns 
 */
function myMap(arr,callback)
{
    let newarray = [];
    for(let i=0;i<arr.length;i++)
    {
        newarray.push(callback(arr[i]));
    }
    return newarray;
}
function multiply(num)
{
    return num*3;
}
console.log(myMap(arr,multiply))

console.log("{B}");
letters = ["The", "internet", "is", "not", "a", "big", "truck.", "It's", "a", "series", "of", "tubes"];
function allcapital(array)
{
    return array.toUpperCase();
} 
console.log(myMap(letters,allcapital));