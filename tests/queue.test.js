const Queue = require('../ds/queue-object')
const queue = new Queue()

beforeEach(() => queue.clear())

describe('When adding or removing elements from the front of the queue', () => {
    test('enqueue adds an element to the start of the queue', () => {
        queue.enqueue('Moco')
        queue.enqueue('Rongo')

        expect(queue.size()).toEqual(2)
        expect(queue.peek()).toEqual('Moco')
    })

    test('dequeue removes the first element from the queue', () => {
        queue.enqueue('Jorge')
        queue.enqueue('Ben')
        queue.enqueue('Jor')

        const dequeued = queue.dequeue()

        expect(queue.size()).toEqual(2)
        expect(queue.peek()).toEqual('Ben')
        expect(dequeued).toEqual('Jorge')
    })
})

describe('When an informative function is called', () => {
    test('peek returns the element at the start of the queue', () => {
        queue.enqueue('a')
        queue.enqueue('b')
        queue.enqueue('c')

        expect(queue.peek()).toEqual('a')
        queue.dequeue()
        expect(queue.peek()).toEqual('b')
    })

    test('isEmpty informs either if the queue is empty or not', () => {
        expect(queue.isEmpty()).toEqual(true)
        queue.enqueue(100)
        expect(queue.isEmpty()).toEqual(false)
        queue.dequeue()
        expect(queue.isEmpty()).toEqual(true)
    })

    test('size returns the correct amount of items in the queue', () => {
        expect(queue.size()).toEqual(0)
        queue.enqueue('hey')
        queue.enqueue('you')
        queue.enqueue('there')
        expect(queue.size()).toEqual(3)
        queue.dequeue()
        expect(queue.size()).toEqual(2)
    })

    test('clear removes all the elements inside the queue', () => {
        queue.enqueue(10)
        queue.enqueue(42)
        queue.clear()
        expect(queue.size()).toEqual(0)
        expect(queue.peek()).toBeUndefined()
    })

    test('toString to return a correct string from the queue elements', () =>{
        queue.enqueue('I')
        queue.enqueue('love')
        queue.enqueue('nachos! <3')

        expect(queue.toString()).toEqual('I, love, nachos! <3')
    })
})