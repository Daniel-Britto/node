const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc', 'root', 'kbrito2913', {
    host: 'localhost',
    dialect: 'mysql'
})

try {

    sequelize.authenticate()

    console.log('Conectamos ao banco!')

} catch(err){console.log('Ocorreu um erro' + error)}

module.exports = sequelize