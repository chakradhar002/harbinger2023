const express =  require('express')
var router = express.Router();
const services = require("../Services/service")





/**
 * 
 * Index Page
 * 
 */

router.get('/',services.Index);


/**
 * POST REQUEST USE TO CREATE NEW USER
 * 
 */
router.post('/signup',services.SignUp); 


/**
 * GET REQUEST USE TO GET  FLIGHT DETAILS
 * 
 */

router.get('/getflightdetails',services.GetFlightDetails);

/**
 * POST REQUEST TO ADD CUSTOMERS CHOICE FOOD TO DATABASE
 * 
 */


router.post('/putfooddetails',services.AddFood)

/**
 * GET REQUEST CHECK SEAT AVAILABILITY
 * 
 */

router.get('/checkseat',services.CheckSeatAvailability)


/**
 * POST REQUEST CREATES A NEW RESERVATION
 * 
 */

router.post('/makereservation',services.MakeReservation)


/**
 * PUT REQUEST MODIFIES RESERVATION DATE
 * 
 */

router.put('/modifyreservation',services.ModifyReservation)



/**
 * DELETE REQUEST  DELETES RESERVATION 
 * 
 */

router.delete('/deletereservation',services.DeleteReservation)



/**
 * Exporting Files
 * 
 */

module.exports = router;