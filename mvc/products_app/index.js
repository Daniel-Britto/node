const express = require('express')
const exphbs = require('express-handlebars')

const conn = require('./db/conn')
const productRoutes = require('./routes/productRoutes')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(productRoutes)
app.use(express.static('public'))

conn
    .sync()
    .then(() => {
        app.listen(3000)
    })
    .catch((error) => {
        console.log(error)
    })