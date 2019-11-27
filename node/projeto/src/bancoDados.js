const sequence = {
    _id: 1,
    get id() {return this._id++}
}
//console.log(sequence.id)

const produtos = {}

function salvarProduto(produto) {
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto    
}

//salvarProduto("Ibanez")
//console.log(produtos)

function getProduto(id) {
    return produtos[id] || {} 
}
//console.log(getProduto(1))

function getProdutos(){
    return Object.values(produtos)
}

function deleteProduto(id) {
    delete produtos[id]
}


module.exports = {salvarProduto, getProduto, getProdutos, deleteProduto}