
const router = require('../Router/router')
const con = require("../Database/database")
var path = require('path');





/**
 * 
 * Index Page
 */


const Index = (req,res) => {
    console.log(__dirname)
    res.sendFile(path.resolve('openme.html'));
}



/**
 * SignUp Function Creates New User In DataBase 
 */

const SignUp =(req,res) => {
    var first_name = req.body.first_name
    var last_name = req.body.last_name
    var gender = req.body.gender
    var dob = req.body.dob
    var email = req.body.email
    var password = req.body.password


    con.query(`INSERT INTO customer (firstName, lastName, gender, dob, email, password) VALUES ('${first_name}', '${last_name}', '${gender}', '${dob}', '${email}', '${password}')`,(err,result)=>{
        
        if (err) throw res.status(404).json({msg:"Error Occurred Data Not Inserted "});
        
        res.status(200).json({msg:"User "+first_name + " Has Been Inserted In Database"})
 })
    

 con.query(`INSERT INTO passenger (email, lastName, gender, dob, email, password) VALUES ('${first_name}', '${last_name}', '${gender}', '${dob}', '${email}', '${password}')`,(err,result)=>{
    if (err) throw err;
})
}


/**
 * Get The Availability of Flights Which fly from a source to Destination with specified Date 
 * @param {*} req 
 * @param {*} res 
 */

const GetFlightDetails =(req,res) => {
    
    var source =req.body.source
    var destination =req.body.destination
    var date = req.body.date

    con.query(`Select * from flight_details where sourceairport = '${source}' and destinationairport = '${destination}' and arrivaldate ='${date}'`,(err,result)=>{
        if (err) throw res.status(404).json({msg:"Error Check Your Input Field "});
        res.status(200).json(result)
    
    })
    
}


/**
 * Checks The Availability Of Seats Which Are Not Booked Yet
 * @param {*} req 
 * @param {*} res 
 */


const CheckSeatAvailability = (req,res) =>{
    var seatnum = req.body.seatnum


    avalable_seat =[1,2,3,5,6,7,8,10,11]

    if (avalable_seat.includes(seatnum)){
            res.status(200).json({msg:"SEAT IS AVAILABLE"})
            console.log("done with insertion")
        
        }
    else{
        res.status(200).json({msg:"SEAT IS NOT AVAILABLE"})
    }

    }



/**
 * Creates new reservation in Database
 * 
 * @param {*} req 
 * @param {*} res 
 */


const MakeReservation = (req,res) =>{
    var fid = req.body.fid
    var email = req.body.email
    var seat_no = req.body.seat_no
    var ticiket_type = req.body.ticiket_type
    var booking_date = req.body.booking_date
    console.log(booking_date)

    con.query(`INSERT INTO reservation (fid, email, seat_no, titckettype, bookingdate) VALUES ('${fid}', '${email}', '${seat_no}', '${ticiket_type}', '${booking_date}')`,(err,result)=>{
        if (err) throw res.status(404).json({msg:" Reservation Failed Check input parameters"});
        res.status(200).json({msg:"Booking Completed For Seat No :- "+String(seat_no)})
        
    
    })
}


/**
 * Modify reservation Date using email in Database
 * 
 * @param {*} req 
 * @param {*} res 
 */



const ModifyReservation = (req,res) =>{
    
    var email = req.body.email
    var date = req.body.date

    con.query(`UPDATE reservation
    SET bookingdate = '${date}'
    WHERE email = '${email}';`,(err,result)=>{
        if (err) throw res.status(404).json({msg:" Reservation Failed User Doesn't Exits check Email ID"});
        res.status(200).json({msg:"Date Changed to " +date})
    
    })
}



/**
 * Deletes reservation using email in Database
 * 
 * @param {*} req 
 * @param {*} res 
 */



const DeleteReservation = (req,res) => {
    var email = req.body.email
    var date = req.body.date

    con.query(`DELETE FROM reservation 
    WHERE email = '${email}';`,(err,result)=>{
        if (err) throw res.status(404).json({msg:" Reservation Failed User Doesn't Exits check Email ID"});
        res.status(200).json({msg:"Reservation is Deleted "})
    
    })
}


/**
 *  Checks if the Food Entered is Available or Not . If Available the adds it to Passenger Table
 * 
 * @param {*} req 
 * @param {*} res 
 */




const AddFood = (req,res) =>{
    var food = req.body.food
    var email = req.body.email

    con.query(`Select mid from meal where name ='${food}'`,(err,result)=>{
        if (err) throw res.status(404).json({msg:" The Food Item is not Available"});
        
        
        if(result.length == 0 ){
            res.status(404).json({msg:"food not available"})
        }
        else{
            con.query(`UPDATE passenger
            SET mid = '${result.mid}'
            WHERE email = '${email}';`,(err,result)=>{
                if (err) throw err;
                res.status(200).json({msg:"Food Added To The Reservation"})
            })
        }
    })
}


/**
 * 
 * Exporting Files 
 */

module.exports = {SignUp,GetFlightDetails,CheckSeatAvailability,MakeReservation,ModifyReservation,AddFood,DeleteReservation,Index};