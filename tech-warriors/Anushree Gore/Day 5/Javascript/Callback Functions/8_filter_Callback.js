array_1 = [3, 5, 6, 1, 2, 3, 4]
function array_filter(num) {
    return num < 5
}
function myFilter(array, callback) {
    return array.filter(callback)
}
console.log(myFilter(array_1, array_filter))

console.log("Part B")
array_2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function removeEvenNumbers(number) {
    if (number % 2 != 0) {
        return number;
    }
}
console.log(myFilter(array_2, removeEvenNumbers))

console.log("Part C")
array_3 = ["Web", "development", "is", "the", "work", "involved", "in", "developing", "a", "website", "for", "the", "Internet", "or", "an", "intranet"];
function removeShortWords(word) {
    if (word.length >= 4) {
        return word;
    }
}
console.log(myFilter(array_3, removeShortWords))