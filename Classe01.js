class Hardware {
    constructor(tipo = "Desktop", config = "HighEnd"){
        this.tipo = tipo
        this.config = config
    }

    addComponent(...components){
        this.components = [
            components
        ]
    }

    MyAddComponent(descricao, valor){
        this.descricao = descricao
        this.valor = valor
        this.components = {
            descricao: valor
        }
    }    

    /*
    listComponent() {
        if ((this.components !== undefined) && (this.components.length > 0)) {
            let listOfComponents = `Lista de componentes: `
            this.components.forEach(c => {
                listOfComponents += c
            })
            return listOfComponents
        }
        else {
            return "Este dispositivo não possui componentes."
        }        
    }
    */

    MyListComponent() {
        return `[${this.descricao}]: ${this.valor}`      
    }    
}

const pc1 = new Hardware()
console.log(pc1)

const pc2 = new Hardware("Notebook","MidEnd")
console.log(pc2)

pc1.addComponent("Placa de Vídeo","Memória RAM","CPU","SSD")
//console.log(pc1.listComponent())
//console.log(pc2.listComponent())

const pc3 = new Hardware()
pc3.MyAddComponent("Placa de Vídeo","RX 580")
console.log(pc3.MyListComponent())
pc3.MyAddComponent("SSD","240Gb")
console.log(pc3.MyListComponent())
pc3.MyAddComponent("CPU","i7 4790")
console.log(pc3.MyListComponent())
pc3.MyAddComponent("Memória","16Gb DDR3 HyperX")
console.log(pc3.MyListComponent())