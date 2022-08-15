const DoubleEndedQueue = require('../ds/double-ended-queue.js')

function palindromeChecker(string){
    // Verifica se a string foi passada como argumento
    if(!string) return false
    // Instancia um novo deque
    const deque = new DoubleEndedQueue()
    // Torna a string lowercased e remove espaços para facilitar a comparação
    const lowerString = string.toLocaleLowerCase().split(' ').join('')

    let isEqual = true
    // Adiciona todas as letras da string à deque
    for(let i = 0, len = lowerString.length; i < len; i++){
        deque.addBack(lowerString[i])
    }
    
    /* 
        Enquanto a deque tiver letras dentro dela e nenhuma letra da frente tiver
        sido diferente da de trás, o loop continua
    */
    while(deque.size() > 1 && isEqual){
        // Pega o primeiro caractere que está dentro da deque
        const firstChar = deque.removeFront()
        // Pega o último caractere que está dentro da deque
        const lastChar = deque.removeBack()
        // Se o primeiro caractere não for igual ao último caractere, a string não é um palíndromo
        if(firstChar !== lastChar) isEqual = false
    }

    return isEqual
}

console.log(palindromeChecker(process.argv[2]))

