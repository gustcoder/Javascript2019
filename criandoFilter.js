Array.prototype.MyFilter = function(callback){
    const NewArray = []
    for(let i=0; i < this.length; i++) {
        if(callback(this[i],i,this)){
            NewArray.push(this[i])
        }
    }
    return NewArray
}

const hardware = [
    { Produto: "GTX 970", Preco: 600, essencial: false },
    { Produto: "RX 580", Preco: 900, essencial: true },
    { Produto: "i7 4790", Preco: 1500, essencial: true },
    { Produto: "HyperX 8Gb", Preco: 300, essencial: true },
]

const Caro = produto => produto.Preco > 500
const Essencial = produto => produto.essencial

let pc = hardware.MyFilter(Caro).MyFilter(Essencial)
console.log(pc)