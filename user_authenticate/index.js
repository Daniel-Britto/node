const express = require('express')
const exphbs = require('express-handlebars')

// importando banco
const conn = require('./db/conn')

// importando rotas
const UserRoutes = require('./routes/UserRoutes')

const app = express()

app.use(
    express.urlencoded({
        extended:true
    })
)
// configurando handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

//rotas
app.get('/', (req, res) => {
    res.render('home')
})

app.use('/user', UserRoutes)

//app.get('/register', (req, res) => {
//    res.render('user/register')
//})



conn.sync()
    .then(
        app.listen(5000)
    )
    .catch()