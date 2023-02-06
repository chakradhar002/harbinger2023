// Array from argument Range

console.log("String Array : ")
let newArray = Array.from("FreeCodeCamp");
console.log(newArray);

console.log("Number Array : ")
const arrayRange = (start, stop, step) =>
    Array.from({
        length: (stop - start) / step + 1
    },
        (value, index) => start + index * step
    );

console.log(arrayRange(1, 6, 1));