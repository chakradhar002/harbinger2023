const express = require('express')
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

/**
 * 
 * Loads the Index Page 
 */
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});



/**
 * Fizz Buzz Get and Post Request
 * 
 */
app.get("/fizzbuzz", (req, res) => {
    res.sendFile(__dirname + "/html_pages/fizzbuzz.html");
});

app.post("/fizzbuzz", (req, res) => {
    var num1 = req.body.number
    console.log(num1)
    if (Number(num1)) {
        if (num1 % 15 == 0) res.send("FizzBuzz");
        else if (num1 % 3 == 0) res.send("Fizz");
        else if (num1 % 5 == 0) res.send("Buzz");
        else {
            res.send(num1)
        }
    }
    else {
        res.send("Enter a Number")
    }
})




/**
 * 
 * Swapping Two Numbers get and post request
 */


app.get("/swap", (req, res) => {
    res.sendFile(__dirname + "/html_pages/swapping.html");
});

app.post("/swap", (req, res) => {
    var num1 = req.body.number1
    var num2 = req.body.number2
    var temp = num1
    num1 = num2
    num2 = temp;
    var text = "Values after swap are Number 1 :- " + num1 + " Number 2 :- " + num2
    res.send(text)
});


/**
 * 
 * Odd Even get and post request
 */

app.get("/oddeven", (req, res) => {
    res.sendFile(__dirname + "/html_pages/odd_even.html");
});

app.post("/oddeven", (req, res) => {
    num = req.body.num
    if (num % 2 == 0) {
        res.send("EVEN")
    }
    else {
        res.send("ODD")
    }

}
);


/**
 * 
 * Find Prime Number in Range get and post request
 */

app.get("/primenum", (req, res) => {
    res.sendFile(__dirname + "/html_pages/prime_num.html");
});

app.post("/primenum", (req, res) => {
    let range = req.body.range
    let string = "1<br>";
    for (let i = 2; i <= range; i++) {
        var val = true
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                val = false
                break
            }
        }
        if (val == true) {
            string += i;
            string += "<br>"
        }




    }
    res.send(string);


}
);




/**
 * 
 * Find Largest Number in An Array
 */


app.get("/largestarray", (req, res) => {
    res.sendFile(__dirname + "/html_pages/Largest_Number_array.html");
});

app.post("/largestarray", (req, res) => {
    var numbers = req.body.numberlist
    let arr = numbers.split(",")
    var maxnum = 0;
    for (let index = 0; index < arr.length; index++) {
        if (Number(arr[index]) > maxnum) {
            maxnum = arr[index]

        }
    }

    res.send("Largest Number is " + maxnum)

});



/**
 * Max Value between Two Numbers GET AND POST METHOD
 * 
 */



app.get("/getmaxnum", (req, res) => {
    res.sendFile(__dirname + "/html_pages/max_number.html");
});

app.post("/getmaxnum", (req, res) => {
    number1 = req.body.number1
    number2 = req.body.number2
    if (number1 > number2) {
        res.send("Higgest number is :- " + number1)
    }
    else {
        res.send("Higgest number is :- " + number2)
    }
});

/**
 * 
 * occurances of an element in array  GET AND POST METHOD
 * 
 */
app.get("/occurances", (req, res) => {
    res.sendFile(__dirname + "/html_pages/Occurances.html");
});


app.post("/occurances", (req, res) => {
    var numbers = req.body.arrayelement
    var number_find = req.body.numbertofind
    let arr = numbers.split(",")
    var count = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] == number_find) {
            count += 1
        }
    }

    res.send(number_find + " OCCURED " + count + " TIMES")
});




/**
 * Sum of Array GET AND POST METHODS 
 * 
 */



app.get("/sumofarray", (req, res) => {
    res.sendFile(__dirname + "/html_pages/sum_of_array.html");
});

app.post("/sumofarray", (req, res) => {
    var str1 = req.body.arr
    var sum1 = 0

    str1 = str1.split(',');
    console.log(str1);

    console.log(typeof str1);


    for (let index = 0; index < str1.length; index++) {
        sum1 += Number(str1[index])
    }

    res.send(String(sum1))
});



/**
 * Printing Star Pattern  GET and POST Method 
 * 
 */


app.get("/star", (req, res) => {
    res.sendFile(__dirname + "/html_pages/star_pattern.html");
});

app.post("/star", (req, res) => {
    let n = req.body.noofrows
                let string = "";
                for (let i = 1; i <= n; i++) {
                    for (let j = 0; j < n - i; j++) {
                        string += " ";
                }

                for (let k = 0; k < i; k++) {
                    string += "*";
                }
                string += "<br>";
                }
            res.send(string);

});


/**
 * Average  of Student Marks GET AND POST METHOD
 * 
 */

app.get("/average", (req, res) => {
    res.sendFile(__dirname + "/html_pages/avg_marks.html");
});

app.post("/average", (req, res) => {

    function findgrade(num){
        if(num >= 0 && num <= 70){
            return "Grade D"
        }
        if(num >= 71 && num <= 80){
            return "Grade C"
        }
        if(num >= 81 && num <= 90){
            return "Grade B"
        }
        if(num >= 91 && num <= 100){
            return "Grade A"
        }
    }

    var num1 = req.body.sub1
    var num2 = req.body.sub2
    var num3 = req.body.sub3
    var num4 = req.body.sub4

    var sum1 = Number(num1) + Number(num2) + Number(num3) +Number(num4)
    res.send(findgrade((sum1 /400) *100))
});


app.listen(1234, () => {
    console.log(`Server is listening on http://localhost:1234`);
});