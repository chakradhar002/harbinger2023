/**
 * truthyFalsy function checks and count the truthy values from an array
 * @param array 
 */

const truthyFalsy = (arr) =>{
    let truthy = 0;
    for(let x of arr){
        if(x!=undefined && x!=false && x!=0 && x!=null && x!="" && x!=NaN)
            truthy++;
    }
    return truthy;
}

const arr= [10,2,null,"",undefined,NaN,"mahadev"];
console.log(truthyFalsy(arr));