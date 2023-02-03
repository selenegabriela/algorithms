// ARRAYS

// Inserte / remove from end - O(1)
// Insert / remove from beginning - Object(n)
// Access - O(1)
// Search - O(n)

// push / pop - O(1)
// shift / unshift / concat / slice / splice - O(n)
// forEach / map / filter / reduce - O(n)

// OBJECTS
const obj2 = {
    name: 'sel',
    lastName: 'amador díaz',
    sayHiToMe: function(){
        console.log('Hi, ', this.name)
    }
}

const hi = obj2.sayHiToMe();
console.log('ENTRIES: ', Object.entries(obj2))
console.log('VALUES: ', Object.values(obj2))
console.log('KEYS: ', Object.keys(obj2))

// Insert / Remove / Access - O(1)
// Search / Object.keys(), .values(), .entries() - O(n)

// MAP

const map = new Map([[1, 'a'], [2, 'b'], [true, [2]]])
map.set('a', 2)
console.log(map.has('b'))
for(const [key, value] of map){
    console.log(`${key}: ${value}`)
}
map.delete(true)
console.log('MAP: ', map)

// STACK (LIFO) -> Last In First Out

class Stack {
    constructor(){
        this.array = []
    }

    push(value){
        this.array.push(value)
    }
    pop(){
        return this.array.pop()
    }
    peek(){
        return this.array[this.array.length-1]
    }
    isEmpty(){
        return this.array.length === 0
    }
    size(){
        return this.array.length
    }
    print(){
        console.log(this.array.toString())
    }
}

const stack = new Stack()
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.print();
console.log('POP: ', stack.pop())
console.log('PEEK: ', stack.peek())
console.log('IS EMPTY: ', stack.isEmpty())
console.log('SIZE', stack.size())


console.log('STACK: ', stack)

// QUEUE 

class Queue {
    constructor(){
        this.array = []
    }

    enqueue(value){
        this.array.push(value)
    }
    dequeue(){
        return this.array.shift()
    }
    peek(){
        if(!this.isEmpty()){
            return this.array[0]
        }
        return null
    }
    isEmpty(){
        return this.array.length === 0
    }
    size(){
        return this.array.length
    }
    print(){
        console.log(this.array.toString())
    }
}

const queue = new Queue()
console.log('QUEUE: ')
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
console.log(queue)

queue.dequeue()

console.log(queue)
console.log(queue.isEmpty())
console.log(queue.size())
queue.print()
console.log(queue.peek())

// QUEUE Object

class QueueObject {
    constructor(){
        this.obj = {}
        this.rear = 0
        this.front = 0
    }

    enqueue(value){
        this.obj[this.rear] = value;
        this.rear++
    }
    dequeue(){
        const deleted = this.obj[this.front]
        delete this.obj[this.front]
        this.front++
        return deleted
    }
    isEmpty(){
        return (this.rear-this.front) === 0
    } 
    peek(){
        return this.obj[this.front]
    }
    size(){
        return this.rear - this.front
    }
    print(){
        console.log(this.obj)
    }
}

const queue2 = new QueueObject()
queue2.enqueue(0)
queue2.enqueue(2)
queue2.enqueue(10)
console.log(queue2)
console.log('jeje',queue2.dequeue())
queue2.enqueue(50)
console.log('jeje',queue2.dequeue())
console.log('peek',queue2.peek())
console.log('size',queue2.size())
queue2.print()
console.log('jeje',queue2.isEmpty())
console.log(queue2)
