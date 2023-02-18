/**
 * largeElementFromArray function returns the maximun element of given array of element
 *  
 * @param array of integers
 */

let largeElementFromArray = function(arr){
    let maximumElement=0;
    // iterating over arr to find large element from an array
    for(let value of arr)
        if(value >  maximumElement)
        maximumElement = value;
    return maximumElement;
}

// creating array of integers
const arr = [10,2,12,11,27,2,3,5,29]

// calling function largeElementFromArray and storing return value into maximumElement variable
maximumElement = largeElementFromArray(arr);

console.log("Maximum Element form array = ",maximumElement);