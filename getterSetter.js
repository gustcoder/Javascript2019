const Classe = {
    _valor: 1,
    get GetValor() {
        return this._valor
    },
    set SetValor(novoValor){
        this._valor += novoValor
    }
}

console.log(Classe.GetValor)
Classe.SetValor = 5
console.log(Classe.GetValor)
Classe.SetValor = 11
console.log(Classe.GetValor)