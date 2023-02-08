//Factory Function
var Person = function (name, age) {
    var person = {};
    person.name = name;
    person.age = age;

    person.info = function () {
        return ("Person's Name is " + person.name + " and Age is " + person.age);
    };
    return person;
}

var person1 = Person("Ram", 22);
console.log(person1.info());

var person2 = Person("Sham", 25);
console.log(person2.info());
