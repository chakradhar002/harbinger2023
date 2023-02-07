/**
 * includes function checks weather element is present in array
 * @param array of integers
 * @param element
 */

let includes = function(arr , element){
    
    for(let value of arr)
        if(value == element)
            return true;
    return false;
}

const arr = [10,2,12,11,27]
console.log(includes(arr,19));