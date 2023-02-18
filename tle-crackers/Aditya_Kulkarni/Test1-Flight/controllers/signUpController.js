/**
 * @author Aditya Kulkarni
 */
const { Router } = require('express')
const { signUpRoute } = require('../service/signUp/signUpRoute')

const router = Router()

router.post('/', signUpRoute)

module.exports = router
