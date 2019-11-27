const produto = new Object
produto.descricao = "Mesa 100x100"
produto.preco = 1150

//delete produto.descricao

console.log(produto)

function produtos(descricao) {
    this.descricao = descricao
    this.ListarProdutos = () => `O produto é: ${this.descricao}`
}

const p1 = new produtos("Mesa 400x400")
console.log(p1.descricao)
console.log(p1.ListarProdutos())