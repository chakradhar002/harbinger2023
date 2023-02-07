/**
 * excludes function takes array and element as input and creates an new array which excludes element
 * @param array of integers
 * @param element
 */

let excludes = function(arr , element){
    const newArray = [];
    for(let value of arr)
        if(element != value)
            newArray.push(value);
    return newArray;
}

const arr = [10,2,12,11,27]
const newArray = excludes(arr,2);

// printing newArray excluding passed element
for(let value of newArray)
    console.log(value);