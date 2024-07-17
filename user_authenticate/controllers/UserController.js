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

    static async loginPost(req, res) {
        const { email, password } = req.body

        //encontrando usuário
        const user = await User.findOne({where: {email: email}})

        // confimando usuário
        if(!user) {
            console.log('Usuário não encontrado!')
            req.flash('message', 'Usuário não encontrado!')
            res.render('user/login')
            return
        }
        console.log('Usuário encontrado!')
        res.render('user/login')
    }

    
}