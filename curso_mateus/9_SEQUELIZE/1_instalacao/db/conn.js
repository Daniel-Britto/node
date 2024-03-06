const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'root', 'kbrito2913', {
  host: 'localhost',
  dialect: 'mysql'
})

try {

  sequelize.authenticate()
  console.log('Conectamos com sucesso com o sequelize!')

}catch(err) {
  console.log('Não foi possivel conectar: ', err)
}

module.exports = sequelize