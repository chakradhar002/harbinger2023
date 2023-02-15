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
  res.sendFile(__dirname + "/swapping.html");
});

app.post("/swapping", (req, res) => {
  let num1 = req.body.firstNumber;

  let num2 = req.body.secondNumber;

  num1 = Number(num1);

  num2 = Number(num2);

  let beforeSwapping = `Before swapping : ${num1}, ${num2}`;

  num1 = num1 + num2;
  num2 = num1 - num2;
  num1 = num1 - num2;

  res.send(`${beforeSwapping} and  After swapping : ${num1}, ${num2}`);
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
