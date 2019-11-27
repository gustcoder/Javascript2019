const itens = [
    {nome: "Bolacha", preco: 5},
    {nome: "Pão", preco: 0.1},
]

const dsc = item => item.nome

console.log(itens.map(dsc))

const preco = function(item){
    
    return item.preco
}

console.log(itens.map(preco))
const resumo = item => `Item: ${item.nome} // Preço: R$ ${item.preco}`

console.log(itens.map(resumo))


const instrumentos = ["Guitarra","Baixo","Bateria"]
const conhecimento = instrumentos.map(tocarInstrumentos)
function tocarInstrumentos(inst) {    
    if(inst == "Guitarra") {
        instrumento = inst
        msg = `Sei tocar ${inst}`
    }
    else {
        instrumento = inst
        msg = `Toco mais ou menos ${inst}`
    }    
    let objAtual = {
        instrumento: msg
    }
    //return msg
    let objRetorno = Object.assign(objAtual)
    return objRetorno
}
console.log(conhecimento)