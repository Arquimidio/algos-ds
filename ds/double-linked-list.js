const LinkedList = require('./linked-list.js')

/*
	Nome: Double Linked List (lista duplamente ligada)
	Principal característica: Cada node tem uma referência ao node anterior e ao posterior (bidirecional)
	Modelo: ---
	Analogia: 
	Construção: Objeto
	Utilização: 
	Problemas comuns: 
	Gotchas:
		1. Pode se iterar nela começando da frente ou de trás
		2. Na iteração da linked list, se passamos direto pelo elemento desejado, temos que voltar tudo desde o início
*/

class Node{
	constructor(value, next){
		this.value = value
		this.next = next
	}
}

class DoublyNode extends Node{
	constructor(value, next, prev){
		super(value, next)
		this.prev = prev
	}
}

class DoublyLinkedList extends LinkedList{
	constructor(equalsFn = (a, b) => a === b){
		super(equalsFn)
		this.tails = null
	}

	insert(value, index){
		if(index >= 0 && index < this.count){

		}

		return
	}
}