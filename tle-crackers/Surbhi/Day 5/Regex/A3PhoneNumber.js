let num = document.getElementById("Phone-Number")
let form = document.getElementById("form")
form.addEventListener("submit", function (e) {
  e.preventDefault() //prevent from submiting form
  let PhoneNumber = num.value
  let pattern = /^\(?([0-9]{4})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/ 
            if(!phone.match(pattern)){
                alert("phone should not be empty and be of pattern provided")
                return
            }
            alert("Valid Phone")
})
