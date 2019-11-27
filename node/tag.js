function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$ ${valor.toFixed(2)}`
        resultado.push(partes[indice],valor)
    })
    return resultado.join('')
}

const p_valor = 10.50
console.log(real `O valor é ${p_valor}`)


function FormataReal(valor) {
    return `R$ ${valor.toFixed(2)}`
}

console.log(FormataReal(50.20))