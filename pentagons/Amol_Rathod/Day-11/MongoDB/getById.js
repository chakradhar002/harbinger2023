const createSchemaFile = require("./createSchema");

let getId = "63e60fad94498d341a7aaec0";

let updateQuery = async (id) => {
  let updateRecord = await createSchemaFile.user.findById(`${id}`);

  console.log(updateRecord);
};

let second = "63e60fad94498d341a7aaec0";

let searchIdIsPresentOrNot = async (id) => {
  let searchAll = await createSchemaFile.user.find();

  for (let i = 0; i < searchAll.length; i++) {
    let search = searchAll[i];

    if (search.id == id) {
      return console.log(`Record is present`);
    } else {
      return console.log("Record is not present");
    }
  }
};

searchIdIsPresentOrNot(second);

if (searchIdIsPresentOrNot(getId)) {
  updateQuery(getId);
} else {
  console.log(`No record found`);
}
