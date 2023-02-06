const createReadOnlyObject = (object) => Object.freeze(object);

let obj = {
  name: "Aishwarya",
  age: 22,
  pincode: 434343,
};

obj = createReadOnlyObject(obj);

console.log(obj);
