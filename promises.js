function LancarEm(tempo,nave){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(nave)
        }, tempo * 1000)
    })
}

LancarEm(2,'Millenium Falcon')
    .then(
        nave => console.log(
            nave.concat(' decolou!!!')
        )
    )
    .catch(e => {
        console.log(e)
    })

    