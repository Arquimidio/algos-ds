const Stack = require('../ds/stack-object')

function decimalToBinary(decimal){
    const stack = new Stack()
    let tracker = decimal
    let binaryString = ''
    while(tracker){
        stack.push(tracker % 2)
        tracker = Math.floor(tracker / 2)
    }

    while(!stack.isEmpty()){
        binaryString += stack.pop()
    }

    return binaryString
}

module.exports = decimalToBinary