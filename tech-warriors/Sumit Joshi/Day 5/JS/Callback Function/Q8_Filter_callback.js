console.log("Part a")

//function called myFilter that takes in an array and a callback as arguments.
// The callback take in an element and return a boolean. myFilter should return a new array 
//with only values that return true when passed into the callback.

let array1 = [1,4,6,7, -3]
function FilterArr(num){
    return num < 5
}


function myFilter(array,callback){
    return array.filter(callback)
}

console.log(myFilter(array1,FilterArr))

console.log("Part b")

//function called removeEvenNumbers that takes in an array and returns an array with all the even numbers removed.

let array2 = [1,2,3,4,5,6,7,8,9]

function removeEvenNumbers(num){
    if(num % 2 !=0){
        return num
    }
}

console.log(myFilter(array2,removeEvenNumbers))

console.log("Part c")

//function called removeShortWords that takes in an array and returns an array 
//with all strings containing fewer than 4 characters removed.

let array3 = ["JavaScript", "is", "a", "high-level,", "interpreted", "programming", "language", "that", "conforms", "to", "the", "ECMAScript", "specification"]

function removeShortWords(str){
    if(str.length > 4){
        return str
    }
}

console.log(myFilter(array3,removeShortWords))

