let employee: object;

employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};

console.log(employee);



//To explicitly specify properties of the employee object, 
//you first use the following syntax to declare the employee object:

let employee1: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
};
// another way is 
let employee2: {
    firstName: string;
    lastName: string;
    age: number;
    jobTitle: string;
} = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    jobTitle: 'Web Developer'
};







