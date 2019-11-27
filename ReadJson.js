const jsonData = require('./data.json')

//console.log(jsonData)

const nome = jsonData.nome 
const idade = jsonData.idade
const altura = jsonData.caracteristicas.altura
const cabelo = jsonData.caracteristicas.cabelo
console.log('====================================')
console.log('LENDO ARQUIVOS JSON')
console.log('====================================')
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Altura: ${altura}`)
console.log(`Cabelo: ${cabelo}`)
console.log('====================================')


// transformando Json em objeto
const jsonParse = JSON.parse('{"nome":"Eu Mesmo", "altura": 1.65}')
console.log(jsonParse)

const nomeParse = jsonParse.nome 
const idadeParse = jsonParse.idade
const alturaParse = jsonParse.altura
const cabeloParse = jsonParse.cabelo
console.log('====================================')
console.log('LENDO ARQUIVOS JSON')
console.log('====================================')
console.log(`Nome: ${nomeParse}`)
console.log(`Idade: ${idadeParse}`)
console.log(`Altura: ${alturaParse}`)
console.log(`Cabelo: ${cabeloParse}`)
console.log('====================================')

const objParaJson = {
    chave: "valor"
}

// transforma objeto em json
const json = JSON.stringify(objParaJson)
console.log(json)