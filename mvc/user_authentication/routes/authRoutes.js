const express = require('express')
const router = express.Router()
const AuthController = require('../controller/AuthController')

router.get('/', AuthController.login)
router.post('/user', AuthController.loginPost)
router.get('/register', AuthController.register)
router.post('/register', AuthController.registerSave)

module.exports = router