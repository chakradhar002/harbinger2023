function conservativeSpender(balance)  {
    return balance > 100
  }
  function liberalSpender(balance) {
    return balance > 10
  }
  function horribleSaver (balance) {
    return balance > 0
  }
function shoulIBuyThis(balance,callback)
{
    let item=callback(balance);
    if(item)
    {
        console.log("Sure! I've got the money!");
    }
    else
    {
        console.log("Nope keep saving");
    }
}
console.log(shouldIBuyThis(20, horribleSaver));
console.log(shouldIBuyThis(20, liberalSpender));
console.log(shouldIBuyThis(20, conservativeSpender));
console.log(shouldIBuyThis(101, conservativeSpender));