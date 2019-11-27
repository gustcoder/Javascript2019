const objClientes = {
    nome: [
        "Maria",
        "Joao"
    ],
    idade: [
        "30",
        "32"
    ]
}

for (let i in objClientes.nome) {
    console.log(`Nome: ${objClientes.nome[i]}  / Idade: ${objClientes.idade[i]}`)
}