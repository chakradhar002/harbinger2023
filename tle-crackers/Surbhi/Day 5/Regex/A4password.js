let pass= document.getElementById("password")
let form = document.getElementById("form")
form.addEventListener("submit", function (e) {
  e.preventDefault() //prevent from submit
  let password = pass.value;
  let length=password.length;
  let pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
  
  if(!pattern.test(password)){
      alert("Password should contain atleast a digit and atleast a smallcase letter and a uppercase letter")
      return 
  }
  else{
    alert("Password Validated")
  }

 
})