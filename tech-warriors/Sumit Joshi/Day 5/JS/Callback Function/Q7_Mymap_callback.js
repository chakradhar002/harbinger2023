console.log("Part a")

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

array2 = ["The", "internet", "is", "not", "a", "big", "truck.", "It's", "a", "series", "of", "tubes"]

function allCaps(array) {
    return array.toUpperCase()
}

console.log(myMap(array2, allCaps))