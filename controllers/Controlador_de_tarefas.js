const Tarefa = require('../models/Tarefa')

const { Op } = require('sequelize')
const { raw } = require('express')

module.exports = class Controlador_de_tarefas {
    static criar_tarefa(req, res) {
        res.render('tarefas/criar')
    }
    static async criar_tarefa_salva(req, res) {
        const tarefa = {
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            validacao: req.body.validacao
        }

        const { titulo, descricao } = req.body

        let verificatarefa = false

        if(titulo.length === 0){
            verificatarefa = true
            res.render('tarefas/criar', { verificatarefa })
        }else {
            await Tarefa.create(tarefa)
            res.redirect('/tarefas')
        }
    }
    static async ver_tarefa(req, res) {
        const id = req.params.id
        const tarefa = await Tarefa.findOne({ where: { id: id }, raw: true })
        res.render('tarefas/tarefa', { tarefa })
    }
    static async remover_tarefa(req, res) {
        const id = req.body.id
        await Tarefa.destroy({ where: { id: id } })
        res.redirect('/tarefas')    
    }
    static async editar_tarefa(req, res) {
        const id = req.params.id
        const tarefa = await Tarefa.findOne({ where: { id: id }, raw: true })
        res.render('tarefas/editar', { tarefa })
    }
    static async editar_tarefa_salva(req, res) {
        const id = req.body.id
        const tarefa = {
            titulo: req.body.titulo,
            descricao: req.body.descricao
        }

        const { titulo, descricao } = req.body

        let editatarefa = false

        if(titulo.length === 0){
            editatarefa = true
            const tarefa = await Tarefa.findOne({ where: { id: id }, raw: true })
            res.render('tarefas/editar', { tarefa, editatarefa })
        }else {
            await Tarefa.update(tarefa, { where: { id: id } })
            const tarefas = await Tarefa.findAll({ raw: true})
            res.redirect('/tarefas')
        }
    }
    static async troca_status(req, res) {
        const id = req.body.id
        const tarefa = {
            validacao: req.body.validacao === '0' ? true : false
        }

        await Tarefa.update(tarefa, { where: { id: id } })

        res.redirect('/tarefas')
    }
    static async tarefas(req, res) {
        
        let search = ''

        if (req.query.search) {
            search = req.query.search
        }

        const tarefasData = await Tarefa.findAll({
            where: {
                titulo: { [Op.like]: `%${search}%` },
            }
        })

        const tarefas = tarefasData.map((result) => result.dataValues)

        let tarefasqty = tarefas.length

        if(tarefasqty === 0) {
            tarefasqty = false
        }
        
        res.render('tarefas/tarefas', { tarefas, search,tarefasqty })
    }
}