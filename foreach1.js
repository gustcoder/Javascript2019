const pilotos = ["Carmichael","Phil","Gustavo","Toni"]
//console.log(pilotos)

pilotos.forEach((nome,indice) => {
    console.log(`${indice}) ${nome}`)
})

const ListarPilotos = (piloto,indice) => console.log(`Piloto: ${piloto}[${indice}]`)
pilotos.forEach(ListarPilotos)

const SomarPontos = (piloto, corrida1,corrida2) => console.log(`Piloto: ${piloto} Total:${corrida1+corrida2}`)
SomarPontos("Carmichael",10,20)
SomarPontos("Phil",15,15)
