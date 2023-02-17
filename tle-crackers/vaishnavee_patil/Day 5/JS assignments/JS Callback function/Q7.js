
function myMap(array, callback) {
    let NewArray = []

    for (num = 0; num < array.length; num++) {
        NewArray.push(callback(array[num]))
    }
    return NewArray
}

arr1 = [3, 5, 6]

function multiply(n) {
    return n * 3
}
console.log(myMap(arr1, multiply))
arr2 = ["The", "internet", "is", "not", "a", "big", "truck.", "It's", "a", "series", "of", "tubes"]

function allCaps(array) {
    return array.toUpperCase()
}

console.log(myMap(arr2, allCaps))