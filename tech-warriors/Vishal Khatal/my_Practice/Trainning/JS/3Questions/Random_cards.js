console.log("write a javascript prg Random Bingo Card");
/**
 * 
 * @returns here we will randomlly generate  value between 1-12 and give suitable name and return them
 */
function number()
{
    let number = Math.floor(Math.random() * 12)+1;
    if (number==1)
        return "Ace";
    else if (number==10)
        return "Jack";
    else if (number==11)
        return "Queen";
    else if (number==12)
        return "King";
    return number;
}
/**
 * 
 * @returns here we will generate random value between 1-4 and give them neam as clubs,diamond,heart,spade accordinglly.
 */
function suites()
{
    let suite = Math.floor(Math.random() * 4)+1;
    if (suite==1)
        return "Clubs";
    else if (suite==2)
        return "Diamonds";
    else if (suite==3)
        return "Hearts";
    else if (suite==4)
        return "Spade";
}
console.log(number(),suites());
