let array1 = [1,4,6,7, -3]
function FilterArr(num){
    return num < 5
}
function myFilter(array,callback){
    return array.filter(callback)
}

console.log(myFilter(array1,FilterArr))

//b part
let array2 = [1,2,3,4,5,6,7,8,9]

function removeEvenNumbers(element){
    if(element % 2 !=0){
        return element
    }
}
console.log(myFilter(array2,removeEvenNumbers))

//c part
let array3 = ["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that", "conforms", "to", "the", "ECMAScript", "specification"]

function removeShortWords(str){
    if(str.length > 4){
        return str
    }
}
console.log(myFilter(array3,removeShortWords))