//Prime Number
let start = prompt("Enter Start Number :");
let end = prompt("Enter End Number :");

console.log("The prime Number between" + start + " to " + end + " : ");

for (let i = start; i <= end; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    //if the number is greater than 0 and not divided by any number
    if (i > 0 && flag == 0) {
        console.log(i);
    }
}