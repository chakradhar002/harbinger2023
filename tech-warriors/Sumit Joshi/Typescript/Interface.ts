interface User{
    readonly dbID : number
    email:string,
    UserID:number,
    startTrial():string
    getCoupon(name:string,value:number):number
}

const sumit:admin={dbID:22,email:"S@gmail.com",UserID:10,
startTrial:()=> {
    return 'trial Started'    
},
getCoupon:(name:"sumit45",off:45) => {
    return 45
},
githubToken:"sumitjoshi",
role:"admin"
}

interface User{
    githubToken:string  //reopening of interface
}

interface admin extends User{
    role:"admin"
}