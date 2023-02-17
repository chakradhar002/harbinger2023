"use strict";
// instead of any use union operator ... 
exports.__esModule = true;
var score = 33;
score = 44;
score = '44';
var user1 = { name: 'aditya', id: 123 };
var user2 = { username: 'Aditya', id: 324 };
//  usage of union in function 
function getDBId(id) {
    if (typeof id === "string") {
        console.log("DB is ".concat(id.toLowerCase()));
    }
    else {
        console.log("DB is ".concat(id + 4));
    }
}
getDBId("THIS IS A ID");
getDBId(32);
// array of multiple types 
var data = [1, 2, "3"];
var seatAllotment;
seatAllotment = "middle";
