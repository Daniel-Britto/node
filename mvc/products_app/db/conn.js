const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', 'kbrito2913', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conectamos ao banco!')
} catch(error) {
    console.log('Aconteceu um erro:' + error)
}

module.exports = sequelize