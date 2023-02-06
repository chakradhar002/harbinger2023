// instead of any use union operator ... 

let score : number | string = 33 

score = 44

score = '44'

type user = {
    name : string ,
    id : number
}

type admin = {
    username : string
    id : number
}


let user1 : user | admin = {name : 'aditya' , id : 123}
let user2 : user | admin = {username : 'Aditya' , id : 324}

//  usage of union in function 

function getDBId(id : number | string){
    if(typeof id === "string"){
        console.log(`DB is ${id.toLowerCase()}`)
    }else {
        console.log(`DB is ${id + 4}`)
    }
}

getDBId("THIS IS A ID")
getDBId(32)


// array of multiple types 

const data : (number | string ) [] = [1 ,  2 , "3"]

let seatAllotment  : "aisle" | "middle"

seatAllotment = "middle"

export {}