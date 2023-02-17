const express = require("express");

const PORT = process.env.PORT || 4040;

const flightReservationApis = require("./controller/flightreservationapis");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/flightreservation", flightReservationApis.router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost${PORT}`);
});

// module.exports = { app };
