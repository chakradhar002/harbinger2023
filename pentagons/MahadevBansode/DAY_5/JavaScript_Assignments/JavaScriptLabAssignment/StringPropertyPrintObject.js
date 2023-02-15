/**
 * stringProperty is a function which prints string properties of object
 * object has following properties :
 * @param name
 * @param id
 * @param age
 * @param city
 */

let student = {

    name : "Mahadev",
    age : 22,
    id : 2101,
    city : "Pune"
};

//function to print stringProperty:
let stringProperty = function(student){
    if(typeof student.name == "string")
        console.log(student.name);
    if(typeof student.age == "string")
        console.log(student.age);
    if(typeof student.id == "string")
        console.log(student.id);
    if(typeof student.city == "string")
        console.log(student.city);
}

stringProperty(student);