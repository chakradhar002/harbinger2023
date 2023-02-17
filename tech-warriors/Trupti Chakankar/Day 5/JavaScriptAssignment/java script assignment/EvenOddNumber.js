// ODD EVEN Number LOOP
let n = prompt("Enter Maximum Number:");

n = Number.parseInt(n);

console.log("Even Number between 1 to " + n);
for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
        console.log(i + " ");
    }
}

console.log("Odd Number between 1 to " + n);
for (let i = 1; i <= n; i++) {
    if (i % 2 != 0) {
        console.log(i + " ");
    }
}