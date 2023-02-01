const User = {
    name:"Sumit",
    address:"pune",
    isActive:true
}

function createUser({name:string, isPaid:boolean}){}

createUser({name:"Sumit",isPaid:false})

function createCourse():{name:string, price:number}{
    return {name:"ReactJs",price:399}
}
export{}