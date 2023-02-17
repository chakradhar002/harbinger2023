var User_input = document.getElementById("User_input").value;
var displayOutput = document.getElementById("displayOutput");

function getOutput(){

    if(User_input % 3 == 0 && User_input % 5 != 0)
    {
        displayOutput.innerHTML = "Fizz";
    }
    else if(User_input % 5 == 0 && User_input % 3 != 0)
    {
        displayOutput.innerHTML = "Buzz";
    }
    else if(User_input % 3 == 0 && User_input % 5 == 0)
    {
        displayOutput.innerHTML = "FizzBuzz";
    }
    else{
        displayOutput.innerHTML = User_input;
    }
}