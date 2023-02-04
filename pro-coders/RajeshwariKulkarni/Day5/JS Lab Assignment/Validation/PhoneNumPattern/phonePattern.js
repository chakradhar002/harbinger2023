
function formValidate(){
    var phoneNumber = document.getElementById("phoneNumber").value;
    

    console.log(phoneNumber)
    

    // Vlidation for Phone nUmber
    var phoneNum = /^\+?(([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(phoneNum.match(phoneNum))
    {
        document.write("Wlcome To Harbinger")
    }
    else{
        document.write("You have enterd wrong phone number , Please take a glance of belows pattern for it")
    }
    
}








