const Stack  = require('../ds/stack-object')

const stack = new Stack()

beforeEach(() => stack.clear())

describe('when calling functions that return information', () => {
    test('peek returns the element on the top of the stack', () => {
        stack.push('Beautiful')
        stack.push('Skies')
        stack.push('OrangeBox')

        expect(stack.peek()).toEqual('OrangeBox')
        stack.pop()
        expect(stack.peek()).toEqual('Skies')
    })

    test('isEmpty informs correctly if the stack is empty', () => {
        stack.push('Monster')
        stack.push('Rusty')
        stack.push('Yo')

        expect(stack.isEmpty()).toEqual(false)

        stack.pop()
        expect(stack.isEmpty()).toEqual(false)

        stack.clear()
        expect(stack.isEmpty()).toEqual(true)
    })

    test('clear removes all the elements from the stack', () => {
        stack.push('Monster')
        stack.push('Rusty')
        stack.push('Yo')

        expect(stack.isEmpty()).toEqual(false)
        stack.clear()
        expect(stack.isEmpty()).toEqual(true)
    })

    test('size returns the amount of elements in the stack', () => {
        stack.push('Monster')
        stack.push('Rusty')

        expect(stack.size()).toEqual(2)
        stack.clear()
        expect(stack.size()).toEqual(0)
    })

    test('toString returns a string of the stack elements', () => {
        stack.push('Overly')
        stack.push('successful')

        expect(stack.toString()).toEqual('Overly, successful')
    })
})

describe('add / remove work well', () => {
    test('adding an element to the stack works', () => {
        stack.push('Cabral')
        
        expect(stack.size()).toEqual(1)
        expect(stack.peek()).toEqual('Cabral')
    })

    test('removing an element from the end of the stack works', () => {
        stack.push('Hey')
        stack.push('Jude')

        const returned = stack.pop()

        expect(returned).toEqual('Jude')
        expect(stack.size()).toEqual(1)
        expect(stack.peek()).toEqual('Hey')
    })
})