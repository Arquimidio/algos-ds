/*
	Nome: Double Ended Queue (DEQUE / fila de duas pontas)
	Modelo: FIFO (first in first out) + LIFO (last in first out)
	Analogia: Fila de cinema (o primeiro a chegar é o primeiro a ser atendido, mas pessoas podem sair da fila antes se acharem que vai demorar ou o primeiro pode voltar ao início da fila para pedir uma informação)
	Construção: STACK (pilha) + QUEUE (fila)
	Utilização: armazenamento de lista de operações para desfazer ações (undo). Depois de algumas operações, as mais antigas serão removidas da fila.
	Problemas comuns: 
*/

module.exports = class Deque{
    constructor(){
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }

    addFront(element){
        // Se deque vazio = adiciona ao final
        if(this.isEmpty()){
            this.addBack(element)
        
        // Agora se algum elemento ja tiver sido removido, adiciona à esquerda diretamente
        }else if(this.lowestCount > 0){
            this.lowestCount--
            this.items[this.lowestCount] = element

        // Agora se o deque for novinho (nenhum elemento foi removido), move todos os índices para frente 1 unidade e adiciona o elemento à esquerda
        }else{
            for(let i = this.count; i > 0; i--){
                this.items[i] = this.items[i - 1]
            }
            this.count++
            this.lowestCount = 0
            this.items[0] = element
        }
    }

    addBack(element){
        this.items[this.count] = element
        this.count++
    }

    removeFront(){
        if(this.isEmpty()) return
        const removed = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return removed
    }

    removeBack(){
        if(this.isEmpty()) return
        this.count--
        const removed = this.items[this.count]
        delete this.items[this.count]
        return removed
    }

    peekFront(){
        if(this.isEmpty()) return
        return this.items[this.lowestCount]
    }

    peekBack(){
        if(this.isEmpty()) return
        return this.items[this.count - 1]
    }

    isEmpty(){
        return this.count === 0
    }

    clear(){
        this.items = {}
        this.count = 0
        this.lowestCount = 0
    }

    size(){
        return this.count - this.lowestCount
    }
}