const User = require('../models/Users')

module.exports = class UserController {
    static show(req, res) {
        res.render('home')
    }
}