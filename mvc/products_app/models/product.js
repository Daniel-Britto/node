const { DataTypes } = require('sequelize')

const db = require('../db/conn')

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