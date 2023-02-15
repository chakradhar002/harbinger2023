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
  res.sendFile(__dirname + "/maxNumber.html");
});

app.post("/maxnumber", (req, res) => {
  let num1 = req.body.number1;

  let num2 = req.body.number2;

  let num3 = req.body.number3;

  num1 = Number(num1);
  num2 = Number(num2);
  num3 = Number(num3);

  let maximumNumber = Math.max(num1, Math.max(num2, num3));

  console.log(`Maximum Number is : ${maximumNumber}`);

  res.send(`Maximum Number is : ${maximumNumber}`);
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
