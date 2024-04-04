const { DataTypes } = require('sequelize')
const sequelize = require('../db/conn')

const User = sequelize.define('user',{
    name: {
        type: DataTypes.STRING,
        required: true
    },
    last_name: {
        type: DataTypes.STRING,
        required: true
    },
    age: {
        type: DataTypes.DATE,
        required: true
    },
    user_name: {
        type: DataTypes.STRING,
        required: true
    },
    password: {
        type: DataTypes.STRING,
        required: true
    }
})

module.exports = User