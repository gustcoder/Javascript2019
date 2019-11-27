const escola = [
    {
      turma: "Turma 1",
      alunos: [
          {
              nome: "Gustavo",
              nota: 9.8
          },
          {
              nome: "Letícia",
              nota: 10
          },
      ]
    },
    {
        turma: "Turma 2",
        alunos: [
            {
                nome: "Ciclano",
                nota: 8.5
            }
        ]
    }
]

const getTurmas = turma => turma.turma
const getAlunos = alunos => alunos.alunos
const getNomeAluno = aluno => aluno.nome
const getAlunosTurma = turma => turma.alunos.map(getNomeAluno)
console.log(escola.map(getTurmas))
//console.log(escola.map(getAlunos))
console.log(escola.map(getAlunosTurma))