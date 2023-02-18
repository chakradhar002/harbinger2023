//declaring array
const marks=[40,90,83,76,40];
let avg;
for(let elemenet in marks){
     avg = avg + marks[elemenet];
}
let n=marks.length;
avegrage=avg/n;
percentage=avegrage * 100;


   if(percentage => 0 && percentage <= 70){
        console.log("Grade : D")
    }
    else if(percentage => 71 && percentage <= 79){
        console.log("Grade : C")
    }
    else if(percentage >= 80 && percentage <= 89){
        console.log("Grade : B")
    }
    else {
        console.log("Grade : A")
    }
