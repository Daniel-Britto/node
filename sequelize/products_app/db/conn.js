// Aqui é onde fazemos a integração com o banco de dados

const { Sequelize } = require('sequelize')

// criando uma instência do Sequelize para se conectar com o banco
const sequelize = new Sequelize('nodesequelize', 'root', 'kbrito2913', {
    host: 'localhost',
    dialect: 'mysql'
})

// função para testar se a conexão está ok
try {
    sequelize.authenticate()
    console.log('Conectado com o banco!')
} catch(error) {
    console.log(`Ocorreu um error : ${error}`)
}

module.exports = sequelize