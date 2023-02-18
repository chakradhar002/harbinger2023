let students = [
    {
        firstName: 'Joe',
        lastName: 'Lee',
        age: 20,
    },

    {
        firstName: 'Anny',
        lastName: 'B',
        age: 23,

    },

    {
        firstName: 'Zack',
        lastName: 'Ross',
        age: 24,

    }
];
students.sort((a, b) => {
    return a.age - b.age;
});
students.forEach((e) => {
    console.log(`${e.firstName} ${e.lastName} ${e.age}`);
});