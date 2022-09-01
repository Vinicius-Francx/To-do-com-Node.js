const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const conn = require('./db/conexao')

const Tarefa = require('./models/Tarefa')

const rotas_de_Tarefas = require('./routes/rotas_de_Tarefas')

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.use(express.static('public'))

app.use('/', rotas_de_Tarefas)

conn.sync().then(() => {
    app.listen(2022)
}).catch((err) => console.log(err))