const ExCadastroPessoa = {
    FCadastroPessoa: 
        function (...nomes) {
            const retNomes = nome => `Boa semana ${nome}!`
            return nomes.map(retNomes)
        },

    FGenero:
        function (nome,genero) {
            if (genero == 'M') {
                return `${nome} é Masculino`
            }
            else {
                return `${nome} é Feminino`
            }
        }        
}


module.exports = ExCadastroPessoa