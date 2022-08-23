const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('lista_de_afazeres', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize