const Product = require('../models/product')

module.exports = class ProductController {
    static async showProducts(req, res) {

        const product = await Product.findAll({ raw: true })

        res.render('products', { product })
    }

    static createProduct(req, res) {
        res.render('create')
    }

    static async createProductSave(req, res) {
        
        const product = {
            name: req.body.name,
            price: req.body.price
        }

        await Product.create(product)

        res.redirect('../')
    }

    static async deleteProduct(req, res) {

        const id = req.params.id

        const product = Product.destroy({ where: { id: id } })

        res.redirect('../',)
        
    }

    static async updateProduct(req, res) {

        const id = req.params.id

        const product = await Product.findOne({ where: {id: id }, raw: true })

        res.render('edit', { product })
    }

    static async updateProductSave(req, res) {

        const id = req.params.id

        const product = {
            id: req.body.id,
            name: req.body.name,
            price: req.body.price
        }

        const newProduct = await Product.update(product, { where: { id: id } })

        res.redirect('../')
    }
}