const url = "http://files.cod3r.com.br/curso-js/funcionarios.json"
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data    
    const filtroPais = filtro => filtro.pais == 'China'
    const filtroGenero = genero => genero.genero == 'F'
    const menorSalario = (func, funcAtual) => {
        return func.salario < funcAtual.salario ? func : funcAtual
    }
    /* Minha tentativa de funcao... quase...
    const menorSalario = function(func){                
        let salario
        if(func.salario < salario) {
            salario = func.salario
            return salario
        }
        
    }
    */
    console.log(funcionarios.filter(filtroPais).filter(filtroGenero).reduce(menorSalario))
})