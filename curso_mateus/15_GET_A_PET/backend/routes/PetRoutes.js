const router = require('express').Router()
const PetController = require('../controllers/PetController')

// middleware
const verifyToken = require('../helpers/verify_token')

router.post('/create', verifyToken, PetController.create)

module.exports = router