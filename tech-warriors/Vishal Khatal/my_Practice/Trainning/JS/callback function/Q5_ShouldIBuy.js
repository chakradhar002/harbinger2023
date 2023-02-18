function conservativeSpender(balance)  {
  return balance > 100
}

function liberalSpender(balance) {
  return balance > 10
}

function horribleSaver (balance) {
  return balance > 0
}
/**
 * we use amount to give response according to balance.
 * @param {amount} balance 
 * @param {callback accordingly} callback 
 */
function shouldIBuyThis(balance,callback){
    let Item = callback(balance)

    if(Item){
        console.log("Sure! I've got the money!")
    }
    else{
        console.log("Nope! Gotta keep my savings up!")
    }
  }
shouldIBuyThis(20, horribleSaver)
// logs: "Sure! I've got the money!"
shouldIBuyThis(20, liberalSpender)
// logs: "Sure! I've got the money!"
shouldIBuyThis(20, conservativeSpender)
// logs:  "Nope! Gotta keep my savings up!"
shouldIBuyThis(101, conservativeSpender)
// logs: "Sure! I've got the money!"