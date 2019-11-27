const hardware = {
    placadevideo: [
        "RX 580","GTX 970"
    ],
    memoria: [
        "8Gb","16Gb"
    ],
    cpu: [
        "i5 3330","i7 4790"
    ],
    ligar(nomepc) {
        return `O computador de ${nomepc} foi ligado`
    }
}

const pc1 = {
    vga: "",
    ligar(nomepc) {
        return super.ligar(nomepc)
    },
    configuracoes(){
        return `
        As configurações são:
          Placa de Vídeo: ${super.placadevideo[0]}
          CPU: ${super.cpu[1]}            
          Memória: ${super.memoria[1]}
        `
    }
}

const pc2 = {
    configuracoes() {
        return `
        PC2
        Placa de Vídeo: ${super.placadevideo[1]}
        CPU: ${super.cpu[0]}            
        Memória: ${super.memoria[0]}
        `
    }
}

Object.setPrototypeOf(pc1,hardware)
pc2.__proto__ = hardware

//console.log(pc1.ligar('Gustavo'))

console.log(pc1.configuracoes())
console.log(pc2.configuracoes())