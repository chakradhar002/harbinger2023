const searchOccurrences = (array  , value) => {
    let result  = 0

    for (let val of array) {
        if(value === val){
            result++ 
        }
    }

    return result
}


console.log(searchOccurrences([25 , 0 , 23, 25, 21, 25, ] , 23))
console.log(searchOccurrences([25 , 0 , 23, 25, 21, 25, ] , 24))
console.log(searchOccurrences([25 , 0 , 23, 25, 21, 25, ] , 25))