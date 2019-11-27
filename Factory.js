const CriarCliente = function(nome, estado){
    return {
        cliente: nome,
        uf: estado
    }
}

let objCliente = CriarCliente('Teste de Minas','MG')
objCliente = CriarCliente('Teste de Rio','RJ')
objCliente = CriarCliente('Teste de São Paulo','SP')
console.log(objCliente)

