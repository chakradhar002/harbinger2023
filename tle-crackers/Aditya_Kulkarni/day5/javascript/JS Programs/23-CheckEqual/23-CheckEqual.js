const isStrictlyEqual =  ( a, b ) => a === b
const isEqual =  ( a, b ) => a == b

const isSame = (a, b) => JSON.stringify(a) == JSON.stringify(b)

//  in objects === || == check if location of objects is same , to check content same stringyfy and compare

console.log("strictly ",isStrictlyEqual({fruit : 'kiwi'} , {fruit : 'kiwi'}))
console.log("loose" ,isEqual({fruit : 'kiwi'} , {fruit : 'kiwi'}))

console.log("same" , isSame({fruit : 'kiwi'} , {fruit : 'kiwi'}))