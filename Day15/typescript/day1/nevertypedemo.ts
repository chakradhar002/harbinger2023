
//the TypeScript never type that contains no value.


//function raiseError(message: string): never {
  //  throw new Error(message);


function raiseError(message: string): never {
    throw new Error(message);
}

function reject() { 
    return raiseError('Rejected');
 }