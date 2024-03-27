const { DataTypes } = require('sequelize')

// importando instância do Sequelize para criar a tabela(modelo)
const db = require('../db/conn')

// criando um modelo(tabela)
const Product = db.define('product', {
    name: {
        type: DataTypes.STRING,
        required: true
    },
    price: {
        type: DataTypes.STRING,
        required: true
    }
})

module.exports = Product