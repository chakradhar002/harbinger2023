const express = require("express");

const app = express();

const bodyParser = require("body-parser");

const PORT = process.env.PORT || 4040;

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/truthFalsy.html");
});

app.post("/truthyfalsy", (req, res) => {
  let number1 = req.body.number1;

  let checkTruthyFalsyValue = Boolean(number1);

  res.send(`Result = ${checkTruthyFalsyValue}`);
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
