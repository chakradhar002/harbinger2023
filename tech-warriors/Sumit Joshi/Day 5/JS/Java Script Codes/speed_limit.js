const speedlimit = 70
const kmperpenalty = 5
function SpeedCheck(currentSpeed){
if(currentSpeed < 70){
    return "Good Safe Driving";
}
else{
    let penalty_point = Math.floor((currentSpeed-speedlimit)/kmperpenalty)
    if(penalty_point < 10){
        return 'Speed limit is crossed by penalty point :' +penalty_point;
    }
    else{
        return "License Suspended";
    }

}
}

console.log(SpeedCheck(67))

console.log(SpeedCheck(87))

console.log(SpeedCheck(40))

console.log(SpeedCheck(120))