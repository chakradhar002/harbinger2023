let num = document.getElementById("Phone-Number")
let form = document.getElementById("form")
form.addEventListener("submit", function (e) {
  e.preventDefault() //prevent from submiting form
  let PhoneNumber = num.value
  if (PhoneNumber === "") {
    alert("Phone-Number must be Entered")
    return
  } else if (PhoneNumber.length != 12) {
    alert("Phone-Number Must be of size 12")
    return
  } else if (!checkIfAlpha(PhoneNumber)) {
    alert("Mobile should only contain dashes and numbers")
    return
  }
  let mobileSubString = null

  if (PhoneNumber.includes("-")) {
    mobileSubString = PhoneNumber.split("-")
  } else if (PhoneNumber.includes(".")) {
    mobileSubString = PhoneNumber.split(".")
  } else if (PhoneNumber.includes(" ")) {
    mobileSubString = PhoneNumber.split(" ")
  }

  if (mobileSubString === null) {
    alert("Wrong Format")
    return
  }

  if (mobileSubString.length !== 3) {
    alert("Wrong Format , Incorrect Format !")
    return
  }

  if (mobileSubString[0].length !== 4) {
    alert("Incorrect Format |XXXX| - XXX - XXX ")
    return
  }

  if (mobileSubString[1].length !== 3) {
    alert("Incorrect Format XXXX - |XXX| - XXX ")
    return
  }

  if (mobileSubString[2].length !== 3) {
    alert("Incorrect Format XXXX - XXX - |XXX| ")
    return
  }

  alert("Valid Mobile")
})
function checkIfAlpha(string) {
  for (i of string) {
    if (i !== "-" && i !== "." && i != " ") {
      if (isNaN(parseInt(i))) {
        return false
      }
    }
  }
  return true
}
