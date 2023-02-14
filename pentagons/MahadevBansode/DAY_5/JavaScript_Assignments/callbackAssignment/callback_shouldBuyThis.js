/**
 * a function shouldIBuyThis that takes in a balance and a callback (one of the above functions). The function 
 * should return either "Sure! I've got the money!" or "Nope! Gotta keep my savings up!"
 * @param {*} balance 
 * @returns 
 */
function conservativeSpender(balance) {
  return balance > 100
}

function liberalSpender(balance) {
  return balance > 10
}

let horribleSaver = function (balance) {
  return balance > 0
}

let shouldIBuyThis = function (balance, callback) {
  let item = callback(balance)

  if (item) {
    console.log("Sure! I've got the money!")
  }
  else {
    console.log("Nope! Gotta keep my savings up!")
  }
}
shouldIBuyThis(10, horribleSaver)
shouldIBuyThis(16, liberalSpender)
shouldIBuyThis(28, conservativeSpender)
shouldIBuyThis(918, conservativeSpender)