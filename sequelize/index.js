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

app.get('/product', (req, res) => {
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

// RESGATANDO DADOS DO BANCO
app.get('/', async (req, res) => {

    // métodos finders são aqueles que geram consulta(SELECT)
    // raw: true: serve para desabilitar  o empacotamento e receber uma resposta simples
    // findAll: método que recupera todas as entradas da tabela
    const products = await Product.findAll({ raw: true })

    res.render('allproducts', { products })
})

// DELETANDO DADOS DO BANCO
app.post('/product/remove/:id', async(req, res) => {

    // resgatar o id do produto
    const id = req.params.id

    // destroy(): utilizado para deletar mutiplas instâncias
    // where: opção utilizada para localizar a entrada
    await Product.destroy({ where: { id: id } })

    res.redirect('/')

})

// SELECIONANDO DADO ESPECÍFICO
app.get('/product/:id', async (req, res) => {
    const id = req.params.id

    try {
        // findOne(): método usado para resgatar um dado específico
        const product = await Product.findOne({ where: { id:id }})

        // renderizamos a nossa viewProduct e mandamos a nossa variável
        res.render('viewProduct', { product: product.get({ plain: true }) })

    }catch(error) {
        console.log(error)
    }
})



conn.sync()
    .then(() => {
        app.listen(3000)
    })
    .catch()

