function conservativeSpender(balance)  {
    return balance > 100;
  };
  
  function liberalSpender(balance) {
    return balance > 10;
  };
  
  function horribleSaver(balance) {
    return balance > 0;
  };


function shouldIBuyThis(balance, callBack) {
    let check = callBack(balance);
  
    if (check) {
      return "Sure! I've got money";
    } else {
      return 'Nope! I gotta keep my savings up!';
    }
  };
  
  console.log(shouldIBuyThis(20, horribleSaver))

console.log(shouldIBuyThis(20, liberalSpender))

console.log(shouldIBuyThis(20, conservativeSpender))

console.log(shouldIBuyThis(101, conservativeSpender))
