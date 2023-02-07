function speedLimit(num){
if(num < 70){
    console.log("Good Safe Driving")
}
else if(num > 70){
    console.log("Speed limit crossed by penalty Point:",num-70)
}
if(num > 120){
    console.log("License Suspended")
}
}
speedLimit(75)