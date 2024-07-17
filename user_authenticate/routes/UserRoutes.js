const express = require('express')
const route = express.Router()

const UserController = require('../controllers/UserController')

route.get('/register', UserController.register)
route.post('/register', UserController.registerPost)
route.get('/login', UserController.login)
route.post('/login', UserController.loginPost)


module.exports = route


