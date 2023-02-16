const speedLimit = 70

const checkSpeed = speed => {
    if(speed < speedLimit){
        return `Good Safe Driving`
    }else {
        let difference = speed - speedLimit 
        let points = Math.floor(difference / 5)

        if(points < 10){
            return `Speed Limit Crossed By Penalty Point ${points}`
        }else {
           return  `Licence Suspended`
        }

    }
}


console.log(checkSpeed(30))
console.log(checkSpeed(70))
console.log(checkSpeed(90))
console.log(checkSpeed(108))
console.log(checkSpeed(120))