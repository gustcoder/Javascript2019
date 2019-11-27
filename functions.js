const RetornaNome = function() {
    return 'Gustavo Ramos'
}

const ArrowNome = () => 'Veio da Arrow: Gustavo Ramos'

const ArrowReturn = (Item) => `O Item informado é ${Item}`

const ArrowCondition = (Id) => {
    if (Id>7) {
        return "Ok!"
    }
    else {
        return "Não passou!"
    }
}

const ArrowUmaLinha = (texto) => `Voce digitou ${texto}`
console.log(ArrowUmaLinha('Aiaiaiai'))

const ArrowUmaLinhaSemParam = () => `Voce digitou nada`
console.log(ArrowUmaLinhaSemParam())

//console.log(ArrowNome())
//console.log(ArrowReturn('Ooooooooopa'))
//console.log(ArrowCondition(8))

const FunctionArrow = (Hero) => `The Hero is ${Hero}`
console.log(FunctionArrow('The Flash'))

const objetos = {
    eu: 'Eu',
    tu: 'Tu',
    eles: 'Eles'
}

for(let obj in objetos){
    console.log(`Chave: ${obj} Valor: ${objetos[obj]}`)
}
