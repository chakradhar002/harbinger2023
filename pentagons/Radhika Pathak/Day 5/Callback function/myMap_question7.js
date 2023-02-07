// a part
array1 = [3, 5, 6];
function multiply(num) {
    return num * 3;
}
function myMap(array, callback) {
    let myarray = []

    for (num = 0; num < array.length; num++) {
        myarray.push(callback(array[num]));
    }
    return NewArray;
}
console.log(myMap(array1, multiply))
//b part
array2 = ["The", "internet", "is", "not", "a", "big", "truck.", "It's", "a", "series", "of", "tubes"]
function convertCapital(array) {
    return array.toUpperCase()
}
console.log(myMap(array2, convertCapital))