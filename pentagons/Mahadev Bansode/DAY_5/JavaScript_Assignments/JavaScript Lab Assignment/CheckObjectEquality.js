/**
 * isEqual function takes two objects as a parameter and check if they are equal or not
 * @param studentObject1
 * @param studentObject2
 */

//Creating student1 object
const studentObject1 = {
    name: 'Tom',
    age: 41,
    city: 'Mumbai',
    state: 'MH'
};
 
 //Creating student2 object
 const studentObject2 = {
    name: 'Tom',
    age: 41,
    city: 'Mumbai',
    state: 'MH'
};

// function checks weather two objects are equal
let isEqual = function(studentObject1,studentObject2){
    if(studentObject1 === studentObject2)
        return true;
    return false;
}

// function checks weather two objects are same or not
let isSame = function(studentObject1,studentObject2){
    
    let sameFlag=false;

    if(studentObject1.name === studentObject2.name && studentObject1.age === studentObject2.age && studentObject1.city === studentObject2.city && studentObject1.state === studentObject2.state)
        sameFlag=true;

    return sameFlag;
}

console.log("isEqual = ",isEqual(studentObject1,studentObject2));

console.log("isSame = ",isSame(studentObject1,studentObject2));
