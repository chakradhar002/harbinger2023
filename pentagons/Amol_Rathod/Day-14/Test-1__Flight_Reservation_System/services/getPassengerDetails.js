const connection = require("../database/flightreservationdb");

const getAllPassengersDetail = (req, res) => {
  let getAllPassengersDetailQuery = "select * from passenger";

  connection.con.query(getAllPassengersDetailQuery, (err, result) => {
    if (err) throw err;

    res.send(JSON.stringify(result));

    console.log(result);
    console.log(`getAllPassengerDetails api ran successfully.`);
  });
};

// creating passenger account :
const insertPassengerAccount = (req, res) => {
  let email = req.body.email;
  let visatype = req.body.visatype;
  let passportno = req.body.passportno;
  let mealtype = req.body.mealtype;
  let tickettype = req.body.tickettype;
  let all = req.body;

  all = JSON.stringify(all, null, " ");

  let insertPassengerAccountQuery = `insert into passenger (email, visatype, passportno, mealtype, tickettype) values ('${email}', '${visatype}', '${passportno}', '${mealtype}', '${tickettype}')`;

  connection.con.query(insertPassengerAccountQuery, (err, data) => {
    if (err) throw err;

    console.log(`insertPassengerAccount api ran successfully.`);

    console.log(all);

    return res.send(JSON.stringify(`${all}`));
  });
};

// Creating person account :
const createAccountOfPerson = (req, res) => {
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let pid;
  let gender = req.body.gender;
  let dob = req.body.dob;
  let email = req.body.email;
  let password = req.body.password;

  let idQuery = `select id from address where city = 'Pune'`;

  connection.con.query(idQuery, (err, data) => {
    pid = data;

    let newpid = pid[0].id;

    console.log(newpid);

    let createAccountOfPersonQuery = `insert into person (firstName, lastName, id,  gender, dob, email, password) values ('${firstName}', '${lastName}', ${newpid}, '${gender}', '${dob}', '${email}', '${password}') `;

    connection.con.query(createAccountOfPersonQuery, (err, data) => {
      if (err) throw err;

      res.send(JSON.stringify(data));

      console.log("createAccountOfPerson api ran successfully..");

      console.log(data);
    });
  });
};

// Getting all persons :
const getAllPersonsDetail = (req, res) => {
  let getAllPersonsDetailQuery = `select * from person inner join address on address.id = person.id;`;

  connection.con.query(getAllPersonsDetailQuery, (err, data) => {
    if (err) throw err;

    console.log(`getAllPersonsDetail api ran successfully.`);

    console.log(data);

    res.send(JSON.stringify(data));
  });
};

// Creating a new customer :

const insertCustomerDetails = (req, res) => {
  let email = req.body.email;
  let noofreservations = req.body.noofreservations;
  let all = req.body;

  let insertCustomerDetailsQuery = `insert into customer (email, noofreservations) values ('${email}', '${noofreservations}') `;

  connection.con.query(insertCustomerDetailsQuery, (err, data) => {
    console.log(`insertCustomerDetails api ran successfully`);

    all = JSON.stringify(all, null, " ");

    console.log(all);

    return res.send(JSON.stringify(`${all}`));
  });
};

module.exports = {
  getAllPassengersDetail,
  createAccountOfPerson,
  getAllPersonsDetail,
  insertPassengerAccount,
  insertCustomerDetails,
};
