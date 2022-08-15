/*
	Nome: Stack (pilha)
	Modelo: LIFO (Last in First out)
	Analogia: Pilha de livros (tem que tirar os de cima para pegar os debaixo)
	Construção: Array ou Objeto
	Utilização: backtracking, call stack, histórico, etc
	Problemas comuns: converter base, equilíbrio de parênteses, torre de hanoi
*/

class Stack{
	constructor(){
		this.count = 0
		this.items = {}
	}

	push(element){
		this.items[this.count] = element
		this.count++
	}

	pop(){
		if(this.isEmpty()) return
		this.count--
		const popped = this.items[this.count]
		delete this.items[this.count]
		return popped
	}

	peek(){
		if(this.isEmpty()) return
		return this.items[this.count - 1]
	}

	isEmpty(){
		return this.count === 0
	}

	clear(){
		this.count = 0
		this.items = {}
	}

	size(){
		return this.count
	}

	toString(){
		return Object.values(this.items).join(', ')
	}
}

module.exports = Stack