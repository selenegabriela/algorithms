const LinkedListTail = require('./linkedList');

class LinkedListStack {
    constructor(){
        this.list = new LinkedListTail()
    }

    push(value){
        this.list.prepend(value);
    }

    pop(){
        return this.list.removeFromFront()
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
        this.list.print()
    }
}

const list = new LinkedListStack();

console.log(list.isEmpty())
list.push(0)
console.log(list.isEmpty())
list.push(1)
list.push(2)
list.push(3)
list.print()
console.log(list.pop());
list.print()
console.log(list.peek())
console.log(list.getSize())