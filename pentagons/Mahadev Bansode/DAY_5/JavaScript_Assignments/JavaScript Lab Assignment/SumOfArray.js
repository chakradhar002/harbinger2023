/**
 * sumOfArray function accepts array as input and return sum of array
 * @param array of integer 
 */

let sumOfArray = function(arr){
    let sum=0;
    for(let x of arr){
        sum += x;
    }
    return sum;
}

const arr = [10,20,30,40];
console.log("sum of array = ",sumOfArray(arr));