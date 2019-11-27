const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'    
]

//console.log(carrinho)

let novocarrinho = carrinho.map(function(e){
    e = JSON.parse(e)
    return `R$ ${e.preco}`
})
console.log(novocarrinho)


/* =================== */
/* logica do curso */
/* =================== */

const ParaObjeto = json => JSON.parse(json)
const ApenasPreco = produto => produto.preco

const resultado = carrinho.map(ParaObjeto).map(ApenasPreco)
console.log(resultado)


const instrumentos = new Map()
instrumentos.set('guitarra', {cordas: true, efeitos: true})
instrumentos.set('bateria', {cordas: false, efeitos: false})
instrumentos.set('baixo', {cordas: true, efeitos: false})


console.log(instrumentos.get('guitarra'))