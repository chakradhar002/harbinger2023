function sayHello() {

    var money;
    var name;
    var age = 20;
    var myVar = "global";      // Declare a global variable   
    if( age > 18 ) {
       document.write("<b>Qualifies for driving</b>");
       var myVar = "local";    // Declare a local variable
               document.write(myVar);
    }
    console.log("hiiii")
   alert("Hello World")

}