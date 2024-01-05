const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

const commodity = [
    {
        id: 1,
        name: 'Notebook lenovo',
        description: 'Memória de 8Gb, HD de 1Tb, Processador AMD Randeon Vega8',
        value: 2800
    },
    {
        id: 2,
        name: 'Tablet lenovo',
        description: 'Memória de 8Gb, HD de 1Tb, Processador AMD Randeon Vega8',
        value: 2800
    },
    {
        id: 3,
        name: 'Smartphone lenovo',
        description: 'Memória de 8Gb, HD de 1Tb, Processador AMD Randeon Vega8',
        value: 2800
    },
    {
        id: 4,
        name: 'Smatwach lenovo',
        description: 'Memória de 8Gb, HD de 1Tb, Processador AMD Randeon Vega8',
        value: 2800
    }

]

app.get('/products', (req, res) => {

    res.render('products', { commodity })
})

app.get('/product/:id', (req, res) => {

    const product = commodity[parseInt(req.params.id) - 1]

    res.render('product', { product })
})


app.listen(3000, () => {
    console.log('Servido está funcionando!')
})