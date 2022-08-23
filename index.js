const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

const Afazer = require('./models/Afazer')

const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.post('/', async (req, res) => {
    
    const tarefa = req.body.tarefa
    const descricao = req.body.descricao
    let concluida = req.body.concluida
    let pendente = req.body.pendente

    if(concluida === 'on') {
        concluida = true
    }else {
        concluida = false
    }

    if(pendente === 'on') {
        pendente = true
    }else {
        pendente = false
    }

    await Afazer.create({ tarefa, descricao, concluida, pendente })

    res.redirect('/')
})

app.get('/afazeres', async (req, res) => { 
    
    const afazeres = await Afazer.findAll({raw: true})

    res.render('afazeres', { afazeres: afazeres })

})

app.get('/afazer/:id', async (req, res) => {
    const id = req.params.id

    const afazer = await Afazer.findOne({ raw: true, where: { id: id } })

    res.render('vertarefa', { afazer })
})

app.post('/afazer/deletar/:id', async (req, res) => { 
    
    const id = req.params.id

    await Afazer.destroy({ where: { id: id }})

    res.redirect('/afazeres')
})

app.get('/afazer/editar/:id', async (req, res) => { 
    
    const id = req.params.id

    const afazer = await Afazer.findOne({ raw: true, where: { id: id }})

    res.render('editartarefa', { afazer })
})

app.post('/afazer/editar', async (req, res) => {

    const id = req.body.id
    const tarefa = req.body.tarefa
    const descricao = req.body.descricao
    let concluida = req.body.concluida
    let pendente = req.body.pendente

    if(concluida === 'on') {
        concluida = true
    }else {
        concluida = false
    }

    if(pendente === 'on') {
        pendente = true
    }else {
        pendente = false
    }

    const afazer = {
        id,
        tarefa,
        descricao,
        concluida,
        pendente
    }

    await Afazer.update(afazer, { where: { id: id } })

    res.redirect('/afazeres')
})

conn.sync().then(()=> {
    app.listen(2022)
}).catch((err) => console.log(err))