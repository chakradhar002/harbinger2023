let pass= document.getElementById("password")
let form = document.getElementById("form")
form.addEventListener("submit", function (e) {
  e.preventDefault() //prevent from submit
  let password = pass.value;
  let length=password.length;
  if(password===""){
      alert("Password must be entered");
      return
  }
  else if(length<4){
      alert("Password Must be Greater then 4 Characters")
      return 
  }

  alert("Password Valid")

 
})