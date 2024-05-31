const User = require('../models/Users')

module.exports = class UserController {

    static show(req, res) {
        res.render('home')
    }

    static register(req, res) {
        res.render('user/register')
    }

    static async registerPost(req, res) {
        const {name, email, password, confimpassword} = req.body

        const user = {
            name,
            email,
            password
        }
        
        try {
            await User.create(user)
            alert('Usuário cadastrado com sucesso!')
        } catch(error) {
            console.log(error)
        }

        res.redirect('../')
    }

    static login(req, res) {
        res.render('user/login')
    }
}