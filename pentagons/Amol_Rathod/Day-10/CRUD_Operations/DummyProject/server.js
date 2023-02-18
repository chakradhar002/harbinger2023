const express = require("express");

const app = express();

const route = require("./routers/route");

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use("/student", route.router);

app.listen(4040, () => {
  console.log(`Listening on port http://localhost:4040/`);
});
