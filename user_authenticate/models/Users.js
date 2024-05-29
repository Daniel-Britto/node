const { DataTypes } = require('sequelize')

// importando banco
const db = require('../db/conn')

const User = db.define('user', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
})

module.exports = User