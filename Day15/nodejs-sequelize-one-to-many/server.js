const db = require("./app/models");
const controller = require("./app/controllers/tutorial.controller");

const run = async () => {
  const tut1 = await controller.createTutorial({
    title: "Tut#1",
    description: "Tut#1 Description",
  });

  
// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  run();
});
