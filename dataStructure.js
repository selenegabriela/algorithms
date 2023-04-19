// ARRAYS

// Inserte / remove from end - O(1)
// Insert / remove from beginning - Object(n)
// Access - O(1)
// Search - O(n)

// push / pop - O(1)
// shift / unshift / concat / slice / splice - O(n)
// forEach / map / filter / reduce - O(n)

// // OBJECTS
const obj2 = {
    name: 'sel',
    lastName: 'amador díaz',
    sayHiToMe: function(){
        console.log('Hi, ', this.name)
    }
}

// const hi = obj2.sayHiToMe();
// console.log('ENTRIES: ', Object.entries(obj2))
// console.log('VALUES: ', Object.values(obj2))
// console.log('KEYS: ', Object.keys(obj2))

// Insert / Remove / Access - O(1)
// Search / Object.keys(), .values(), .entries() - O(n)

// MAP

// const map = new Map([[1, 'a'], [2, 'b'], [true, [2]]])
// map.set('a', 2)
// console.log(map.has('b'))
// for(const [key, value] of map){
//     console.log(`${key}: ${value}`)
// }
// map.delete(true)
// console.log('MAP: ', map)

// // STACK (LIFO) -> Last In First Out

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

// const stack = new Stack()
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// stack.push(5);
// stack.print();
// console.log('POP: ', stack.pop())
// console.log('PEEK: ', stack.peek())
// console.log('IS EMPTY: ', stack.isEmpty())
// console.log('SIZE', stack.size())


// console.log('STACK: ', stack)

// // QUEUE 

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

// const queue = new Queue()
// console.log('QUEUE: ')
// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)
// console.log(queue)

// queue.dequeue()

// console.log(queue)
// console.log(queue.isEmpty())
// console.log(queue.size())
// queue.print()
// console.log(queue.peek())

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

// const queue2 = new QueueObject()
// queue2.enqueue(0)
// queue2.enqueue(2)
// queue2.enqueue(10)
// console.log(queue2)
// console.log('jeje',queue2.dequeue())
// queue2.enqueue(50)
// console.log('jeje',queue2.dequeue())
// console.log('peek',queue2.peek())
// console.log('size',queue2.size())
// queue2.print()
// console.log('jeje',queue2.isEmpty())
// console.log(queue2)

// CIRCULAR QUEUE

class circularQueue {
    constructor(capacity){
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.rare = -1;
        this.front = -1;
    }

    isFull(){
        return this.currentLength === this.capacity;
    }

    isEmpty(){
        return this.currentLength === 0;
    }

    enqueue(value){
        if(!this.isFull()){
            this.rare = (this.rare + 1) % this.capacity;
            this.items[this.rare] = value;
            this.currentLength++;
            if(this.front === -1){
                this.front++
            }
        }
    }

    dequeue(){
        if(!this.isEmpty()){
            const item = this.items[this.front];
            this.items[this.front] = null;
            this.front =  (this.front + 1) % this.capacity;
            this.currentLength--;
            if(this.isEmpty()){
                this.rare = -1;
                this.front = -1;
            }
            return item;
        }
        return null;
    }

    peek(){
        if(!this.isEmpty()){
            return this.items[this.front];
        }
        return null;
    }
    print(){
        if(this.isEmpty()){
            console.log('Queue is empty');
        } else {
            let i;
            let str = '';
            for(i = this.front; i !== this.rare; i = (i + 1) % this.capacity){
                str += this.items[i] + ' ';
            }
            str += this.items[i];
            console.log(str)
        }
    }
}

// const queue3 = new circularQueue(5);

// queue3.enqueue('a');
// queue3.enqueue('b');
// queue3.enqueue('c');
// queue3.enqueue('d');
// console.log(queue3.dequeue());
// console.log(queue3.isEmpty());
// queue3.enqueue('e');
// queue3.enqueue('f');
// console.log(queue3.isFull());

// console.log(queue3.peek());
// queue3.print();

// LINKED LIST

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }
    
    prepend(value){
        const node = new Node(value);
        if(!this.isEmpty()){
            node.next = this.head;
        }
        this.head = node;
        this.size++;
    }

    print(){
        if(this.isEmpty()) {
            console.log('List is empty');
        } else {
            let current = this.head;
            let list = ''
            while(current){
                list += current.value + ' ';
                current = current.next;
            }
            console.log(list)
        }
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
        } else {
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
}

const linkedlist = new LinkedList();
// console.log(linkedlist.isEmpty())
// console.log(linkedlist.getSize())
console.log(linkedlist.print())
linkedlist.append(2)
console.log(linkedlist.print())
linkedlist.append(4)
linkedlist.append(6)
console.log(linkedlist.print())
