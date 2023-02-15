const express = require("express");

let studentController = require("./Controller/studentController");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/student", studentController);

app.listen(3030, () => {
  console.log(`Application is listening on port 3030`);
});
