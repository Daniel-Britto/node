const express = require('express')
const exphbs = require('express-handlebars')

const conn = require('./db/conn')

const app = express()

conn
    .sync()
    .then(() => {
        app.listen(3000)
    })
    .catch((error) => console.log(error))

