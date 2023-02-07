/**
 * speedLimit function takes integer {speed} as a input
 * if speed is < 70 => prints 'Good Safe Driver'
 * if speed is > 70 every 5 km is penalty point => prints 'Speed limit crossed by penalty point'+point
 * if driver gets > 10 penalty points i.e above 120km => "Licence suspend"
 * 
 * @param speed
 */

let speedLimit = function(speed){
    let point;
    if(speed < 70)
        console.log("Good Safe Driver");
    else
        if(speed > 70){
            let point = Math.floor((speed/5) - 14);
            if(point > 10)
                console.log("Licence suspend")
            else
                console.log("Speed limit crossed by penalty point = ",point);
        }
    
}

speedLimit(124);