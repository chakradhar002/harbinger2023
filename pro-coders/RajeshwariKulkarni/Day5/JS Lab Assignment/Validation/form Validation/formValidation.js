
function formValidate(){
    var phoneNumber = document.getElementById("phoneNumber").value;
    var password = document.getElementById("password").value;

    console.log(phoneNumber)
    console.log(password)

    // Vlidation for Phone nUmber
    if(isNaN(phoneNumber))
    {
        alert("Please Enter Correct Number ")
    }
    if(phoneNumber.length <= 0)
    {
        alert("Inncorrect Number")
    }
    if(phoneNumber.length < 10)
    {
        alert("Number is less than 10 digit. Please Enter Correct Number!")
    }

    // Validation for Password
    if(password.length <= 0)
    {
        alert("Please enter Correct Password!")
    }
    if(password.length < 4)
    {
        alert("Password Must be more than 4 Charaters")
    }
    else{
        document.write("You have passed all the test cases")
    }
}





