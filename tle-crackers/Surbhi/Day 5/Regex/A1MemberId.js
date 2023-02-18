let num = document.getElementById("number")
let form = document.getElementById("form")
form.addEventListener("submit", function (e) {
  e.preventDefault() //prevent from submit
  let number = num.value
  let pattern = /[^0-9]/g
  if (number === "") {
    alert("Must be Entered")
  }
  let ans = pattern.test(number)

  if (!ans) {
    alert("Validated")
  } else {
    alert("Not Validated! Input value must be number")
  }
})
