const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', 'kbrito2913', {
    host: 'localhost',
    dialect: 'mysql',
})

try {

    sequelize.authenticate()
    console.log('Conectamos ao MySQL')
} catch (error) {
    console.log(`Não foi possivel conectar: ${error}`)
}

module.exports = sequelize