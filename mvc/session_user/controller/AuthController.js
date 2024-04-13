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
        // Verifique as credenciais do usuário
        // Se as credenciais estiverem corretas, armazene informações do usuário na sessão

        req.session.user = {
            username: user.firstname,
            email: user.email
        }

        res.render('auth/protect')

        //res.render('auth/user', { user, authPassword })

    }

    // página "protegida" - acessando o sitema com usuário
    static intoSystem(req, res) {
        if(req.session.user) {
            // O usuário está autenticado, pode acessar a página
            res.render('protect')
        } else {
            // Redirecione o usuário para a página de login, pois ele não está autenticado
            res.redirect('/')
        }
    }

    // fazendo logout do sitema
    static logoutSystem(req, res) {
        // limpando dados da sessão
        req.session.destroy((err) => {
            if(err) {
                console.log(err)
            } else {
                res.redirect('/')
            }
        })
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