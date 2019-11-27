const Computador = require('./computador')
console.log(Computador)

let objComputador = new Computador('i7 4790','RX 580','HyperX 16Gb','Asus H81-M')
console.log(objComputador.computadorLigado())

objComputador.ligarComputador()
console.log(objComputador.computadorLigado())

objComputador.desligarComputador()
console.log(objComputador.computadorLigado())

console.log(objComputador.exibirConfig())