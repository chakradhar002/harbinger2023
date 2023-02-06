//Average and Grade 
var name = prompt(" Name of Student :");
var math = prompt("Enter Marks of Maths :");
var sci = prompt("Enter Marks of Science :");
var history = prompt("Enter Marks of History :");
var hindi = prompt("Enter Marks of Hindi :");

math = Number.parseInt(math);
sci = Number.parseInt(sci);
history = Number.parseInt(history);
hindi = Number.parseInt(hindi);

var total = math + sci + history + hindi;

var avg = total / 4;
var grade;

if (avg >= 80) {
    grade = "A";
} else if (avg >= 70 && avg < 80) {
    grade = "B";
} else if (avg >= 60 && avg < 50) {
    grade = "C";
} else if (avg < 50) {
    grade = "D";
}
console.log("---------------------------------------------------------------")
console.log("Result of " + name + ":");
console.log("Average of marks :" + avg);
console.log("Grade :" + grade);