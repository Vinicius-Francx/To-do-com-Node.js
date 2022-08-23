const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Afazer = db.define('Afazer', {
    tarefa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        required: true
    },
    concluida: {
        type: DataTypes.BOOLEAN,
    },
    pendente: {
        type: DataTypes.BOOLEAN,
    },
})

module.exports = Afazer