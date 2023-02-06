// enumerations 

enum SeatChoice {
    aisle = "aisle" , window = "window" , middle = "middle" 
}

const choice  = SeatChoice.aisle

// to loop over elements of enum  

console.log(Object.keys(SeatChoice))

export {}