const createSchemaFile = require("./createSchema");

let updateQuery = async () => {
  let updateRecord = await createSchemaFile.user.findByIdAndDelete(
    "63e612b83de01b92797ccb97"
  );

  console.log("Deleted Object is : \n\t");
  console.log(updateRecord);
};

updateQuery();
