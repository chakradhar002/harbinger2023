// Write a function forEachElem that takes in an array and a callback. Call the callback on each element in the array.
arr = [1,4,5,6]
function print(n){
    console.log(n)
}
function foreachelement(array,callback){
    for(n = 0; n < array.length;n++){
        callback(array[n])
    }
}

foreachelement(arr,print)


//a function logEachElem that takes an array as an argument logs every element in the input array.
// Use forEachElem inside the body of your function
let arr2 = [1,2,34]
function logeachelement(num){
    console.log(num)
}

foreachelement(arr2,logeachelement)

console.log("Part c")

let arr3 = [1,"Hi", true, {color: "green"}]

function logArrTypes(array){
    console.log(`${array} is a ${typeof(array)}`)
}

foreachelement(arr3,logArrTypes)