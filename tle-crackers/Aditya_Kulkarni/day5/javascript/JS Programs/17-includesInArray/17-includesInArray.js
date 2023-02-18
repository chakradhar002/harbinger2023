const includesInArray =  ( element , array ) => {
    for (el of array ){
        if(el === element) return true
    }
    return false
}

console.log(includesInArray(3 , [3, 4 , 5]))
console.log(includesInArray(1 , [3, 4 , 5]))
console.log(includesInArray(5 , [3, 4 , 5]))