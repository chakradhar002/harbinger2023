console.log("Que 7.A : ");
arr = [3,5,6]; 
/**
 * to perform operations
 * @param {array} arr 
 * @param {*} callback 
 * @returns 
 */
function myMap(arr,callback)
{
    let newarr = [];
    for(let i = 0; i < arr.length; i++)
    {
        newarr.push(callback(arr[i]));
    }
    return newarr;
}
function multiply(num)
{
    return num * 3;
}
console.log(myMap(arr,multiply))

console.log("Que 7.B : ");
letters = ["The", "internet", "is", "not", "a", "big", "truck.", "It's", "a", "series", "of", "tubes"];
function allcapital(array)
{
    return array.toUpperCase();
} 
console.log(myMap(letters,allcapital));