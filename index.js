const obj = {}
obj.nome = "Gustavo"
obj.idade = 30
console.log(obj)
console.log("Idade é: "+obj.idade)
console.log(`Idade é: ${obj.idade}`)

console.log(obj.json);

const Funcao = (id) => id >= 5 ? 'Aprovado' : 'Reprovado'
console.log(Funcao(3));