const express = require('express')
const exphbs = require('express-handlebars')

// exportando modelo
const Product = require('./models/Products')

const conn = require('./db/conn')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.json())

app.use(
    express.urlencoded({
        extended: true
    })
)

app.get('/', (req, res) => {
    res.render('product')
})

// ADICIONANDO DADOS AO BANCO
app.post('/product/create', async (req, res) => {

    // capturando os dados
    const name = req.body.name
    const price = req.body.price

    // utilizando método -create()- no nosso modelo para criar a tabela
    await Product.create({ name, price })

    res.redirect('/')
})


conn.sync()
    .then(() => {
        app.listen(3000)
    })
    .catch()

