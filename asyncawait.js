const Motos = ['CRF','TTR','KDX','Agrale']

const getMotos = async (indice) => {
    //return Motos.forEach((moto,indice) => `${indice + 1}: ${moto}`)
    const moto = await Motos[indice]
    return moto
}
getMotos(1)
    .then(moto => console.log(moto))