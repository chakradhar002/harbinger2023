let pass= document.getElementById("password")
let form = document.getElementById("form")
form.addEventListener("submit", function (e) {
  e.preventDefault() //prevent from submit
  let password = pass.value;
  let length=password.length;
  
  let pattern =/^[A-Za-z0-9]{4,32}$/
  
  if(!pattern.test(password)){
      alert("Not validated")
      return 
  }
  else{
    alert("Valid  Password")
  }

 
})