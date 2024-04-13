const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const flash = require('express-flash')
const FileStore = require('session-file-store')(session)

const conn = require('./db/conn')
const authRoutes = require('./routes/authRoutes')

const app = express()

// session middleware - salvar sessôes
app.use(session({
    secret: 'ninha_secret',
    resave: false,
    saveUnitialized: false
}))
  


app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

// flash message
app.use(flash())

// set session to res
app.use((req, res, next) => {

    if(req.session.userid) {
        res.locals.session = req.session
    }

    next()

})

// routes
app.use('/', authRoutes)

conn
    //.sync({ force: true })
    .sync()
    .then(() => {
        app.listen(3000)
    })
    .catch((error) => console.log(error))

