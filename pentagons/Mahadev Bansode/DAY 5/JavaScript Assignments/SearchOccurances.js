/**
 * searchOccurances function counts the occurance of element inside an array
 * @param array of integers
 * @param element
 */

let searchOccurances = function(arr , element){
    let count=0;
    // iterating over arr to search for an element
    for(let value of arr)
        if(element == value)
            count++;
    return count;
}

const arr = [10,2,12,11,27,2,3,5,2]
occurance = searchOccurances(arr,2);

console.log("search count = ",occurance);