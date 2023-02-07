/**
 * createArray function accepts two integers as min and max.
 * returns an array of given min and max range values
 * 
 * @param min
 * @param max 
 */

let createArray = function(min , max){
    const arr = [];
    for(let i=min ; i<=max ; i++)
        arr.push(i);

    return arr;
}

//calling createarray() and storing array in arr variable
let arr = createArray(10,20);

// printing element of array
for(let value of arr)
    console.log(value);