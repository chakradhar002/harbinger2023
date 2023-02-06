function conservativeSpender(balance)  {
    return balance > 100
  }
  
  function liberalSpender(balance) {
    return balance > 10
  }
  
  function horribleSaver (balance) {
    return balance > 0
  }

//   my code from here 
  function shouldIBuyThis(balance,call){
    let product = call(balance)               
    if(product){
        console.log(`"Sure! I've got the money!"`)
    }
    else{
        console.log(`"Nope! Gotta keep my savings up!"`)
    }
  }

  shouldIBuyThis(20, horribleSaver)
  shouldIBuyThis(20, conservativeSpender)
  shouldIBuyThis(20, liberalSpender)
  shouldIBuyThis(101, conservativeSpender)
