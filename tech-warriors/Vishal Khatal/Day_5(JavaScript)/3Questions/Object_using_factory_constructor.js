
console.log('24-object-create-object-factory-constructor-function');
/**
 * here we will create object using factory 
 * @param {string} name 
 * @param {integer} age 
 * @param {string} address 
 * @returns A factory function can be defined as a function that creates an object and returns it.
 */
function createObjFactoryMethod(name, age, address) {
  return {
    name, age, address
  }
}

let Students1 = createObjFactoryMethod('vishal', 23, 'Katraj');

console.log('Students1', Students1);
/**
 * here we will create object using constructor.
 * A constructor is a special function that creates and initializes an object instance of a class.
 * @param {string} name 
 * @param {integer} age 
 * @param {string} address 
 */
function Student(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
}

let Students2 = new Student('aditya', 22, 'malkhapur');
console.log('Students2', Students2);
