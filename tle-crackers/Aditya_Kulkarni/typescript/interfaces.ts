interface User {
    readonly dbId : number,
    email : string , 
    userId : number
    googleToken ? : string
    startTrial ? : () => string 
    payment ? ()  : number
    getCoupon ? (name : string): number
}

// interfaces

interface Payment{}

interface Admin extends User{
    role : "admin" | "learner"
}


