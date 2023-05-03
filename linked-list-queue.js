const LinkedListTail = require('./linkedList');

class linkedListQueue {
    constructor(){
        this.list = new LinkedListTail;
    }

    enqueue(value){
        this.list.append(value);
    }

    dequeue(value){
        return this.list.removeFromFront();
    }

    peek(){
        return this.list.head.value;
    }

    isEmpty(){
        return this.list.isEmpty()
    }

    getSize(){
        return this.list.getSize()
    }

    print(){
        this.list.print();
    }
}

const list = new linkedListQueue();

list.enqueue(1);
console.log(list.isEmpty());
list.enqueue(2);
list.enqueue(3);
console.log(list.getSize());
list.enqueue(4);
console.log(list.peek());
list.print();
console.log(list.dequeue());
list.print();

