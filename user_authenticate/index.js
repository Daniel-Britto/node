const express = require('express')
const exphbs = require('express-handlebars')
const flash = require('express-flash')

// importando banco
const conn = require('./db/conn')

// importando rotas
const UserRoutes = require('./routes/UserRoutes')

const app = express()

// receber dados do body
app.use(
    express.urlencoded({
        extended:true
    })
)

// ativando flash message
app.use(flash())

// receber dados em json
app.use(express.json())

// configurando handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

// renderizando rotas
app.get('/', (req, res) => {
    res.render('home')
})

app.use(express.static('public'))

app.use('/user', UserRoutes)

//app.get('/register', (req, res) => {
//    res.render('user/register')
//})



conn.sync()
    .then(
        app.listen(5000)
    )
    .catch()