console.log("Part a")

// function called myMap that takes in an array and a callback as arguments. 
//It returns a new array with the callback applied to each element in the array.

array1 = [3, 5, 6]

function threeMult(num) {
    return num * 3
}
function myMap(array, callback) {
    let NewArray = []

    for (num = 0; num < array.length; num++) {
        NewArray.push(callback(array[num]))
    }
    return NewArray
}
console.log(myMap(array1, threeMult))



console.log("Part b")

//function allCaps that takes in an array as an argument, and uses the myMap function
// to return all the elements capitalized.

array2 = ["My", "name", "is", "Anushree"]

function allCaps(array) {
    return array.toUpperCase()
}

console.log(myMap(array2, allCaps))