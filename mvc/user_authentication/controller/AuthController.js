const User = require('../models/User')
const flash = require('express-flash')

module.exports = class AuthController {

    static login(req, res) {
        res.render('auth/login')
    }


    static async loginPost(req, res) {
        const {email, password} = req.body

        const user = await User.findOne({ where: {email: email}, raw: true})

        // created function for authenticate password of user
        const authPassword = () => {
            if (password == user.password) {
                return true
            } else {
                return false
            }
        }

        res.render('auth/user', { user, authPassword })

    }

    static register(req, res) {
        res.render('auth/register')
    }

    static async registerSave(req, res) {
        const { firstname, lastname, age, email, password, confirmpassword } = req.body

        const users = {
            firstname,
            lastname,
            age,
            email,
            password
        }

        const authUser = await User.findOne({ where: { email: email }})

        if (password !== confirmpassword) {
            req.flash('message', "As senha não coincidem. Tente novamente!")

            res.redirect('register')
        }   else if (authUser) {
            req.flash('message', 'Usuário já está cadastrado. Tente outro.')

            res.redirect('register')
        }

        try {
            await User.create(users)

            res.redirect('../')
        } catch(error) {
            console.log('Ocorreu um error' + error)
        }
        

        
    }

}