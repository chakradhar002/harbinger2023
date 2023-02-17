const User = {
    name : 'aditya' , 
    email : 'adityak@email.com',
    isActive : false 
}
const createUser = ({name : string , isActive : boolean}) : {name : string, isActive : boolean} =>{
    return User
}
createUser({name : "" , isActive:"false"})


type user = { 
    readonly _id : string ,
    name : string , 
    email : string , 
    isActive : boolean   ,
    creditCardDetails ? : number 
}

const u : user = {
    _id : "12" , 
    name : 'ad',
    email : "" , 
    isActive : false 
}

export {}