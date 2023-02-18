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
  res.sendFile(__dirname + "/speedlimit.html");
});

app.post("/speedlimit", (req, res) => {
  let yourSpeed = req.body.speed;

  const speedLimit = 65;

  if (yourSpeed > speedLimit) {
    return res.send(`Your are crossing the speed limit of ${speedLimit}`);
  } else {
    return res.send(`Your are maintaining the speed limit of ${speedLimit}`);
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
