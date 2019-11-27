async function ReturnJson(){
    const url = "http://localhost/json/data.json"
    try{
        const retorno = await fetch(url)
        const dados = await retorno.json()
        return dados
    }
    catch(error){
        console.log(`API Error: ${error}`)
    }
}

ReturnJson()
    .then(function(dados){
        try{
            console.log(dados.nome)    
        }
        catch(error){
            console.log(`Function Error: ${error}`)
        }
    })