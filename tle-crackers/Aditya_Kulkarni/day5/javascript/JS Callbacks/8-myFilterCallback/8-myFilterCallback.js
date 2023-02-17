const myFilter = (array , callback ) =>{
    let result = []
    for (let element of array){
        if(callback(element)){
            result.push(element)
        }
    }

    return result
}

const removeEvenNumbers = (array) => {
    return myFilter(array , e => e % 2)
}

const removeShortCharacters = (array) =>{
    return myFilter(array , e => e.length > 4)
}

console.log(myFilter([1,  2, -3 ] , e => e > 0))
console.log(removeEvenNumbers([1,  2, -3 ]))
console.log(removeShortCharacters(["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that", "conforms", "to", "the", "ECMAScript", "specification"]))