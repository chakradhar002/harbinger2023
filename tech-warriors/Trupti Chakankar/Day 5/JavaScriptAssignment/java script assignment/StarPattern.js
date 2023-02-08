// Nested loop Star Pattern

let n = prompt("Enter Number of line you want to print :")

let string = "";
for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
        string += "*";
    }
    string += "\n";
}
console.log(string)