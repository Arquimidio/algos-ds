/*
	Nome: Linked List (lista ligada)
	Modelo: ---
	Analogia: Fila de pessoas daçando conga (Cada pessoa é um elemento e as mão são os
    pointers que fazem a ligação com a próxima pessoa da fila. Para adicionar uma nova 
    pessoa, basta achar o lugar em que quer colocá-la, desfazer a conexão das mãos e 
    criar uma nova com ela naquele local) OU uma caça ao tesouro ou um trem
	Construção: Objeto
	Utilização: 
	Problemas comuns: 
    Gotchas:
        1. Ao iterar pela linked list, para saber que ela terminou, basta verificar
        se o valor do elemento atual é null
*/

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor(equalsFn = function(a, b){ return a === b }){
        this.count = 0
        this.head = null
        this.equalsFn = equalsFn
    }

    push(value){
        // Cria um novo nodo
        const node = new Node(value)
        // Declara uma variável para armazenar o último item da linked list
        let current
        // Se a linked list ainda nem tiver sido inicializada, inicie-a com o primeiro elemento sendo o passado como parâmetro
        if(this.head == null){
            this.head = node
        }else{
            // De outra maneira, iterar pela lista até chegar ao último elemento
            current = this.head
            while(current.next != null){
                current = current.next
            }
            // Agora que current refere-se ao último elemento da linked list, podemos adicionar o novo elemento ao final dela
            current.next = node
        }

        this.count++
    }

    insert(value, index){
        // Verifica se o índice está dentro do tamanho a linked list
        if(index >= 0 && index <= this.count){
            // Cria um novo nó com o valor passado
            const node = new Node(value)
            // Se o nó for ser inserido no índice 0 (primeira posição da LL)
            if(index === 0){
                let current = this.head
                node.next = current
                this.next = node 
            }else{
                // Se o nó for inserido em qualquer outro lugar que não seja o índice 0
                const previous = this.getElementAt(index - 1)
                const current = previous.next
                previous.next = node
                node.next =  current
            }
            // Atualiza o tamanho da Linked List
            this.count++
            return true
        }  

        return false
    }

    getElementAt(index){
        if(index >= 0 && index < this.count){
            let current = this.head
            for(let i = 0; i < index; i++){
                current = current.next
            }
            return current
        }

        return
    }

    remove(value){
        // Busca o índice do nó do valor passado
        const index = this.indexOf(value)
        // Remove o nó se o índice tiver sido encontrado
        this.removeAt(index)
    }

    indexOf(value){
        // Armazena o primeiro item da linked list
        let current = this.head
        for(let i = 0; i < this.count; i++){
            // Se o valor do item atual na iteração for igual ao valor fornecido, retorna o índice 
            if(this.equalsFn(value, current.value)){
                return i
            }
            // Atualiza o elemento atual na iteração
            current = current.next
        }
        return -1
    }

    removeAt(index){
        // Verifica se o índice recebido está dentro do tamanho da lista
        if(index >= 0 && index < this.count){
            // Inicializa o current como o início dessa linked list
            let current = this.head
            // Se o elemento a ser removido for o primeiro, só transforme-o no elemento que vem em sequência
            if(index === 0){
                this.head = current.next
            }else{
                // Se não for o primeiro, itere até chegar ao índice e re-faça a conexão
                let previous
                // Iteração até o índice especificado como argumento
                for(let i = 0; i < index; i++){
                    // A cada iteração, previous é igual ao valor anterior e current ao atual
                    previous = current
                    current = current.next
                }
                // Aqui é re-feita a conexão
                previous.next = current.next
                // Diminui-se o tamanho da linked list em 1 unidade
                this.count--
                return current.value
            }
        }

        return
    }

    refactoredRemoveAt(index){
        if(index >= 0 && index < this.count){
            if(index === 0){
                this.head = this.head.next
            }else{
                const previous = this.getElementAt(index - 1)
                const current = previous.next
                this.count--
                previous.next = current.next
                return current
            }
        }
        
        return
    }

    getHead(){
        return this.head
    }

    isEmpty(){
        return this.count === 0
    }

    size(){
        return this.count
    }

    toString(){
        let current = this.head
        let string = ''
        for(let i = 0; i < this.count; i++){
            string += current.value
            current = current.next
        }
        return string
    }
} 

module.exports = LinkedList