function String_properties(object){
    for(let key in object){
        if(typeof(object[key])==='String'){
            console.log(key,':',object[key])
        }
    }
}

const object1={
    name:'Sumit',
    age:23,
    Add:'Pune',
    pin:411057
}

String_properties(object1)