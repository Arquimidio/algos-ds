/*
	Nome: Queue(fila)
	Modelo: FIFO (First in First Out)
	Analogia: Fila da cafeteria (quem chega primeiro é atendido primeiro)
	Construção: Array ou Objeto
	Utilização: fila de impressão
	Problemas comuns: batata quente
*/

class Queue{
    constructor(){
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }

    enqueue(element){
        this.items[this.count] = element
        this.count++
    }

    dequeue(){
        if(this.isEmpty()) return
        const removedElement = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return removedElement
    }

    peek(){
        if(this.isEmpty()) return
        return this.items[this.lowestCount]
    }

    isEmpty(){
        return this.count - this.lowestCount === 0
    }

    size(){
        return this.count - this.lowestCount
    }

    clear(){
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }

    toString(){
        let resultString  = this.items[this.lowestCount]

        for(let i = this.lowestCount + 1; i < this.count; i++){
            resultString = `${resultString}, ${this.items[i]}`
        }

        return resultString
    }
}


module.exports = Queue