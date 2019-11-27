class Conexao {
    constructor(table) {
        this.table = table
    }

    MyQuery() {
        this.query = `SELECT * FROM ${this.table}`
        console.log(this.query)
    }
}

let obj = new Conexao('TABELAS')
obj.MyQuery()


function ConexaoFunction() {
    this.MyQuery = function(table) {
        this.query = `SELECT * FROM ${table}`
        return this.query
    }
}

let objFunction = new ConexaoFunction
console.log(objFunction.MyQuery('PORT'))

const FactoryArrow = (table) => `SELECT * FROM ${table}`
console.log(FactoryArrow('Arrow'))