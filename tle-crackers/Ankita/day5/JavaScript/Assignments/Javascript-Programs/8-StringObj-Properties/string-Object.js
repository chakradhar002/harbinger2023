 function string_Object(object1){
    for([key,val] of Object.entries(object1)){
        if(typeof val === "string"){
            console.log(key,val)     //used map to iterate over objects
        }
    }
}
strobject={
    name: 'Ankita',
    num:99,               //for dummy condition
    country: 'India',
    designation:'Trainee'
}
string_Object(strobject)

