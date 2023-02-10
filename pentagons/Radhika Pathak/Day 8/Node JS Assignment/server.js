const { Console } = require("console");
var http = require("http");
const prompt = require("prompt");


function add() {
    prompt.start();


    //get numbers from user
    prompt.get(["num1", "num2"],
        function (error, response) {
            if (error) {
                console.log(error);
            }
            else {
                var num1=parseInt(response.num1);
                var num2=parseInt(response.num2);
                [num1, num2] = [num2, num1];
                console.log(("\nBefore Swapping \n First Number:", response.num1));
                console.log("<br>Second Number:", response.num2);
                
                console.log("<br>After Swapping:\nFirst Number:", response.num1);
                console.log("<br>Second Number:", response.num2);
            }

        }).listen(4200);
        console.log("Server started at 4200");
        console.log("Running server at 127.0.0.1:4200");
    }