const searchMaxInArray = (array) => {

    if(!array || array.length === 0){
        return 0
    }

    let max = array[0]

    for (let v of array){   
        if(v > max ){
            max = v
        }
    }

    return max
}

console.log(searchMaxInArray([]))
console.log(searchMaxInArray())
console.log(searchMaxInArray([2, ,34, 5]))