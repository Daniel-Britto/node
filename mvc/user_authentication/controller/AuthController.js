const User = require('../models/User')


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


        try {
            await User.create(users)

            res.redirect('../')
        } catch(error) {
            console.log('Ocorreu um error' + error)
        }
        

        
    }

}