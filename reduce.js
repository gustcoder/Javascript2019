const alunos = [
    { Aluno: "Gustavo", Bolsista: false, Salario: 3000 },
    { Aluno: "Estagiario", Bolsista: true, Salario: 500 },
    { Aluno: "Letícia", Bolsista: true, Salario: 2200 }
]

console.log(alunos)

const bolsistas = alunos.reduce(function(a){
    return a.Bolsista ? `${a.Aluno} é bolsista` : `${a.Aluno} NÃO é bolsista`
})

console.log(bolsistas)