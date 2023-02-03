//Here defined 3 functions in that the balance is argument 


function conservativeSpender(balance)  {
  return balance > 100
  }
  
  function liberalSpender(balance) {
    return balance > 10
  }
  
  function horribleSaver (balance) {
    return balance > 0
  }

  //Takes balance and on function as argument 

  function shouldIBuyThis(balance,callback){
    let product = callback(balance)               //assigned one variable to callback

    //specified condition for that variable

    if(product){
        console.log(`"Sure! I've got the money!"`)
    }
    else{
        console.log(`"Nope! Gotta keep my savings up!"`)
    }
  }

  shouldIBuyThis(20, horribleSaver)
  shouldIBuyThis(20, liberalSpender)
  shouldIBuyThis(20, conservativeSpender)
  shouldIBuyThis(101, conservativeSpender)