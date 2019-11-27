const fabricantes = ["Honda","Kawasaki","Suzuki","Yamaha","KTM","Husqvarna"]

function Imprimir(marca,indice){
    console.log(`${indice + 1}: ${marca}`)
}

fabricantes.forEach(Imprimir)