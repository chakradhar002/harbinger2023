console.log("Callback boolean");
/**
 * takes boolean value like true,false,0,1
 * @param {boolean} boolean 
 * this will call sfun after bcallback is run
 * @param {function} callback 
 */
function bcallback(b,callback)
{
    if(typeof(b)==="boolean")
    {
        callback();
    }
    else
    {
        console.log("Ignoring the callback function ");
    }
}
function sfun()
{
    console.log('""');
}

bcallback(100,sfun);