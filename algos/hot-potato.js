const Queue = require('../ds/queue-object')

/*
    Pseudocódigo
    1. Criar uma fila
    2. Se a batata quente não cair na mão de quem está na frente da fila, volta para o final da fila
    3. Quando a batata quente cair na mão do primeiro da fila, este será eliminado
    4. Repetir até que sobre apenas 1 pessoa na fila
*/

function hotPotato(kids, num){
    const queue = new Queue()

    for(let i = 0; i < kids.length; i++){
        queue.enqueue(kids[i])
    }

    while(queue.size() > 1){
        for(let i = 0; i < num; i++){
            queue.enqueue(queue.dequeue())
        }
        queue.dequeue()
    }

    return queue.peek()
}

console.log(hotPotato(['John', 'Jack', 'Camila', 'Ingrid', 'Carl', 'Jobson'], 2)) // 'John'