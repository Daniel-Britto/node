const {Sequelize} = require('sequelize')

const sequelize = new Sequelize ('gourmetcoffee', 'root', 'kbrito2913', {
    host: 'localhost',
    dialect: 'mysql'
})

try{

    sequelize.authenticate()
    console.log('Conectamos ao banco!')

}catch(error) {
    console.log(error)
}

module.exports = sequelize