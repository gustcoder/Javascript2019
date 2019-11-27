const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const bd = require('./bancoDados')

/*
app.get('/produtos', (req, res, next) => {
        res.send({produto: "Ibanez JEM 7V", preco: 7000}) //converte automaticamente para JSON
    }
)
*/

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(bd.getProdutos())
})

app.get('/produtos/:id',(req, res, next) => {
    res.send(bd.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bd.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bd.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('/produtos/:id',(req, res, next) => {
    res.send(bd.deleteProduto(req.params.id))
})

app.listen(porta,"localhost",() =>{
    console.log(`Servidor escutando na porta ${porta}.`)
})