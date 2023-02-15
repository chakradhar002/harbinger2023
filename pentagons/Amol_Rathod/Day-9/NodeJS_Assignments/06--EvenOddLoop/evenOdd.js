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
  res.sendFile(__dirname + "/evenOdd.html");
});

app.post("/evenodd", (req, res) => {
  let number1 = req.body.number1;

  number1 = Number(number1);

  if (number1 % 2 == 0) {
    return res.send(`The number ${number1} is EVEN`);
  } else {
    return res.send(`The number ${number1} is ODD`);
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
