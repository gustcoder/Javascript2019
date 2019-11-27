const notas = [7.7,6.5,8,3.5,9.7]

// sem callback
let notasBaixas = []
for(let i in notas) {
    if(notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

// com callback
notasBaixas = notas.filter(nota => nota < 7)

let notasAltas = []
notasAltas = notas.filter(nota => nota >= 7)

console.log(notasBaixas)
console.log(notasAltas)