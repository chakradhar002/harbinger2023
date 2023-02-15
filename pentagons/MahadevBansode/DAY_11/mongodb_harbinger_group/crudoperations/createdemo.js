
const createSchemaFile = require('./collectiondemo');

let userSchemeListOne = new createSchemaFile.user({
    name: 'tanmay deshmukh',
    age: 20
});

userSchemeListOne.save((err, data) => {
    console.log(data);
    console.log('Inserted into employee');
});