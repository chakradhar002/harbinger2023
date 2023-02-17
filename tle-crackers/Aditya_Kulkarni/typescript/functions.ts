// function addTwo (num){
//     return num + 2
// }

// addTwo(5)
//  // addTwo("5") -> should give error


function addTwo (num : number){
    return num + 3
}

addTwo(2)

// adding  a return type 

function getUpper(val : string) : string {
    return val.toUpperCase()
}

//let num : number= getUpper("toUpperCase") -> wrong

let values : string  = getUpper("Hello")

function signUpUser(name : string , email: string , password : string){

}

signUpUser("Aditya" , "aditya.k@mygemail.com", "123")

let loginUser = (name : string , email :string , password : string = "Hello") => {}

const getHello = (s : string):string => ""

export {}

