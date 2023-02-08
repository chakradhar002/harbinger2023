// Mxa Number in Array
let arr = [10, 50, 72, 69, 32, 51, 10];
temp = 0;

arr.forEach((element) => {
    if (temp < element) {
        temp = element;
    }
});

console.log("The largest number in the array:" + temp);
