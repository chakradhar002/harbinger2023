console.log("write a javascript prg Create Array From Argument Range");
/**
 * here we will create a array using arguments of a function .
 * @param {integer} min 
 * @param {integer} max 
 */
function ArrayFromArgument(min,max)
{
    let arr = [];
    for(let i=min;i<max;i++)
    {
        arr.push(i);
        
    }
    console.log(arr);
}
ArrayFromArgument(2,6);