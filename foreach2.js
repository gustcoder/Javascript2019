function forEach2(array){
    for(let i in array){
        console.log(array[i])
    }
}

const pilotos = ["Carmichael","Phil","Gustavo","Toni"]
console.log(forEach2(pilotos))
//console.log(pilotos)

pilotos.forEach2(function(nome,indice){
    console.log(`${indice}) ${nome}`)
})