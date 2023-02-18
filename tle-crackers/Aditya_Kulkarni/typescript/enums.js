"use strict";
// enumerations 
exports.__esModule = true;
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["aisle"] = "aisle";
    SeatChoice["window"] = "window";
    SeatChoice["middle"] = "middle";
})(SeatChoice || (SeatChoice = {}));
var choice = SeatChoice.aisle;
// to loop over elements of enum  
console.log(Object.keys(SeatChoice));
