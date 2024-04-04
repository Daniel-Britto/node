const express = require('express')
const routes = express.Router()

const ProductController = require('../controllers/ProductController')

// criando as rotas onde o primeiro atributo colocamos a rota e o segundo chamamos o objeto do controller com seu método
routes.get('/', ProductController.showProducts)
routes.get('/add', ProductController.createProduct)
routes.post('/add', ProductController.createProductSave)
routes.post('/delete/:id', ProductController.deleteProduct)
routes.get('/edit/:id', ProductController.updateProduct)
routes.post('/edit/:id', ProductController.updateProductSave)


module.exports = routes