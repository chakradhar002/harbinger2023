/**
 * grade function accepts an array containing marks of student
 * return grade by calculating sum of marks and taking average
 * 
 * @param array os marks
 */

const grade = (marks) =>{
    let sum=0;
    for(let x of marks){
        sum = sum+x;
    }
    console.log("sum = ",sum);
    let average = sum/marks.length;
    console.log("average = ",average);

    if(average >= 0 && average <= 70)
        return "D";
    else
        if(average >= 71 && average <= 79)
            return "C";
    else
        if(average >= 81 && average <= 89)
            return "B";
    else
        if(average >= 91 && average <= 100)
            return "A";
}

const marks = [80,70,70,90,70];
console.log("Grade = ",grade(marks));