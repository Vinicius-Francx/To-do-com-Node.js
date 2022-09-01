const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('lista_de_tarefas', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

try {
    sequelize.authenticate()
    console.log('Servidor conectado na porta: 2022')
}catch (error) {
    console.log(`Não foi possível conectar: ${error}`)
}

module.exports = sequelize