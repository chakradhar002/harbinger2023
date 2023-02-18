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
  res.sendFile(__dirname + "/averageGrade.html");
});

app.post("/averagegrade", (req, res) => {
  let physics = Number(req.body.number1);

  let chemistry = Number(req.body.number2);

  let biology = Number(req.body.number3);

  let math = Number(req.body.number4);

  let sumOfAllMarks = physics + chemistry + biology + math;

  let avg = (sumOfAllMarks / 400) * 100;

  if (avg <= 70) {
    return res.send(`Grade D`);
  } else if (avg < 80) {
    return res.send(`Grade c`);
  } else if (avg < 90) {
    return res.send(`Grade B`);
  } else {
    return res.send(`Grade A`);
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
