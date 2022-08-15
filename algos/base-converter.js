const Stack = require('../ds/stack-object')

/* 
    Pseudocódigo
    1. Criar uma pilha
    2. Criar um dicionário de dígitos baseado no número de bases abrangidas
    3. Verificar se a base fornecida está dentro das bases possíveis
    4. Enquanto o número não for 0, adicionar o resto da divisão pela base à pilha
    e dividí-lo pela base
    5. Enquanto houver elementos na pilha, removê-los e adicioná-los ao resultado
*/

function baseConverter(decNumber, base){
    let number = decNumber
    const stack = new Stack()
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let baseString = ''

    if(base < 2 || base > 36) return ''

    while(number){
        stack.push(number % base)
        number = Math.floor(number / base)
    }

    while(!stack.isEmpty()){
        baseString += digits[stack.pop()]
    }

    return baseString
}

module.exports = baseConverter