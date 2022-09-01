const { DataTypes } = require('sequelize')

const db = require('../db/conexao')

const Tarefa = db.define('Tarefa', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false,
        required: true,
    },
    validacao: {
        type: DataTypes.BOOLEAN,
        required: true
    },
})

module.exports = Tarefa