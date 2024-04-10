const express = require('express')
const exphbs = require('express-handlebars')

const conn = require('./db/conn')
const authRoutes = require('./routes/authRoutes')

const app = express()


app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

app.use('/', authRoutes)

conn
    //.sync({ force: true })
    .sync()
    .then(() => {
        app.listen(3000)
    })
    .catch((error) => console.log(error))

