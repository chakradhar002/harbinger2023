//declaring and initializing a array
const array = [0, "Volvo", "BMW","",0,null];
//initialze truthy value
var truthy=0
//intialize falsy value
var falsy=0
for(i in array){
    if (!variable) {
        falsy++;
      }
    else{
        truthy++;
    }  
}
console.log("Total truthy value is:"+truthy);
console.log("Total Falsy value is:"+falsy);