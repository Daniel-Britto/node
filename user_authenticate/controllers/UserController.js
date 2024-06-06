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

    static async loginAuth(req, res) {
        const {email, password} = req.params
        let valid = true
        const user = {
            email,
            password
        }

        console.log(user)
        const userTrue = await User.findOne({where: {email: email}})

        if (user.email !== userTrue.email) {
            valid = true
            res.redirect('user/login', {valid})
        }
    }
}