const express = require('express')
const exphbs = require('express-handlebars')

// importando banco
const conn = require('./db/conn')

// importando rotas
const UserRoutes = require('./routes/UserRoutes')

const app = express()

// configurando handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//renderizando rota raiz
app.get('/', UserRoutes)


conn.sync()
    .then(
        app.listen(3000)
    )
    .catch()