const createReadOnlyObject = (object) => Object.freeze(object);

let obj = {
  name: "Aditya",
  age: 22,
};

obj = createReadOnlyObject(obj);

obj.name = "Amol";

console.log(obj);
