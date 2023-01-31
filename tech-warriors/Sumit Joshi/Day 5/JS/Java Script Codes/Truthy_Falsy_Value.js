array = [false,0,undefined,null,'',NaN,1]

function checkCount(array){
    let count = 0
    for(let ele of array){
        if(ele){
            count++
        }   
    }
    return count
}

console.log(checkCount(array))