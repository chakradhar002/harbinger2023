/**
 * 
 * @param {String} name 
 * @param {Number} age 
 * @param {Number} salary 
 * @returns name,age,salary
 */
function objectFactory(name, age, salary) {
    return {
        name, age, salary, record: function () {
            console.log("New employee added => " + name);
        }
    }
}
let employee_1 = objectFactory('Vishal', 22, 50000);
console.log('employee_1', employee_1);
employee_1.record();

let employee_2 = objectFactory('Aditya', 22, 50000);
console.log('employee_2', employee_2);
employee_2.record();
