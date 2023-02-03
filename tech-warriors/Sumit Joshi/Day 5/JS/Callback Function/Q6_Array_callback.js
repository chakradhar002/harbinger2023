//a function forEachElem that takes in an array and a callback. 
//Call the callback on each element in the array.

console.log("Part a")
elem = [1,4,5,6]
function format(num){
    console.log(num)
}
function ForEachElem(array,callback){
    for(num = 0; num < array.length;num++){
        callback(array[num])
    }
}

ForEachElem(elem,format)


//a function logEachElem that takes an array as an argument logs every element in the input array.
// Use forEachElem inside the body of your function


console.log("Part b")

let elem2 = [1,2,34]
function logEachelem(num){
    console.log(num)
}

ForEachElem(elem2,logEachelem)


//a function logArrTypes that uses the forEachElem method to log each array element followed by its type.

console.log("Part c")

let elem3 = [1,"Hi", true, {color: "green"}]

function logArrayTypes(array){
    console.log(`${array} is a ${typeof(array)}`)
}

ForEachElem(elem3,logArrayTypes)