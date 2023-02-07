console.log(`\nStudent Object : `);
let studentObject = (studentName, studentAge, studentClass, studentCity) => {
  return new Object({ studentName, studentAge, studentClass, studentCity });
};
console.log(studentObject("Aditya", 23, "MSc", "Pune"));

let addressObject = (city, state, country) => {
  return new Object({ city, state, country });
};

console.log(`\nAddress Object : `);
console.log(addressObject("Pune", "Maharashtra", "India"));
