const express = require('express')
const router = express.Router()

const Controlador_de_tarefas = require('../controllers/Controlador_de_tarefas')

router.get('/', Controlador_de_tarefas.criar_tarefa)
router.post('/', Controlador_de_tarefas.criar_tarefa_salva)
router.get('/tarefas', Controlador_de_tarefas.tarefas)
router.get('/tarefa/:id', Controlador_de_tarefas.ver_tarefa)
router.post('/tarefas/remover', Controlador_de_tarefas.remover_tarefa)
router.get('/tarefa/editar/:id', Controlador_de_tarefas.editar_tarefa)
router.post('/tarefa/editar', Controlador_de_tarefas.editar_tarefa_salva)
//router.post('/validacao', Controlador_de_tarefas.troca_status)

module.exports = router