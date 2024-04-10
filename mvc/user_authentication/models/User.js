const { DataTypes } = require('sequelize')
const sequelize = require('../db/conn')

const User = sequelize.define('user',{
    firstname: {
        type: DataTypes.STRING,
        required: true
    },
    lastname: {
        type: DataTypes.STRING,
        required: true
    },
    age: {
        type: DataTypes.STRING,
        required: true
    },
    email: {
        type: DataTypes.STRING,
        required: true
    },
    password: {
        type: DataTypes.STRING,
        required: true
    }
})

module.exports = User