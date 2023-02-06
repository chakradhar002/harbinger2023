
var average

document.getElementById('btn').addEventListener("click", (e) => {
    var java = document.getElementById("java").value;
    var python = document.getElementById("python").value;
    var awt = document.getElementById("awt").value;
    var react = document.getElementById("react").value;
    console.log(java)
    console.log(python)
    console.log(awt)
    console.log(react)

    let total = parseInt(java) + parseInt(python) + parseInt(awt) + parseInt(react)
    console.log(total)
    average = (total / 400)*100;
    document.write("Average : " + average+"<br/>");
    if(average <=70 && average >= 0)
    {
        document.write("Grade : D ")
    }
    else if(average <= 79 && average >= 71)
    {
        document.write("Grade : C ")
    }
    else if(average <= 89 && average >= 80)
    {
        document.write("Grade : B ")
    }
    else if(average == 100 && average >= 90)
    {
        document.write("Grade : A ")
    }
    else if(average > 100)
    {
        document.write("Something went wrong")
    }
    else{
        document.write(" FAIL ")
    }
})