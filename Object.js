class ExibirPessoa {
    constructor(nome) {
        this.nome = nome
    }

    dados() {
        return `O nome é: ${this.nome}`
    }
}

const pessoa = new ExibirPessoa('Gustavo')
console.log(pessoa.nome)

console.log(pessoa.dados())
