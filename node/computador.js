class Computador  {
    constructor(cpu, vga, memoria, mobo) {
        this.cpu = cpu
        this.vga = vga
        this.memoria = memoria
        this.mobo = mobo
        this.ligado = false
    }

    computadorLigado() {
        this.ligado ? console.log("Computador está ligado") : console.log("Computador {NÃO} está ligado")
    }

    ligarComputador() {
        this.ligado = true
    }

    desligarComputador() {
        this.ligado = false
    }

    exibirConfig(){
        console.log('===============================')
        console.log(`CPU: ${this.cpu}`)
        console.log(`Placa de Vídeo: ${this.vga}`)
        console.log(`Memória: ${this.memoria}`)
        console.log(`Placa-Mãe: ${this.mobo}`)
        console.log('===============================')
    }
}

module.exports = Computador