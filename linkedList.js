class NodeTail {
    constructor(value){
        this.value = value,
        this.next = null
    }
}

class LinkedListTail {
    constructor(){
        this.head = null,
        this.tail = null,
        this.size = 0
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    print(){
        if(this.isEmpty()){
            console.log('List is empty');
        } else {
            let current = this.head;
            let values = '';

            while(current){
                values = values + current.value + ' ';
                current = current.next;
            }
            console.log(values)
        }
    }
    prepend(value){
        const node = new NodeTail(value);
        if(this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value){
        const node = new NodeTail(value);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }
    removeFromFront(){
        if(this.isEmpty()){
            return null;
        } else {
            const value = this.head.value;
            this.head = this.head.next;
            this.size--;
            return value;
        }
    }
    removeFromEnd(){
        if(this.isEmpty()){
            return null;
        }
        const value = this.tail.value;
        if(this.size === 1){
            this.head = null;
            this.tail = null;
        } else {
            let previous = this.head;
            while(previous.next !== this.tail){
                previous = previous.next;
            }
            previous.next = null;
            this.tail = previous;
        }
        size--;
        return value;
    }
}

// const newList = new LinkedListTail()

// newList.prepend(1);
// newList.prepend(2);
// newList.prepend(3);
// newList.append(4);
// newList.append(5);
// newList.append(6);
// console.log(newList.removeFromFront());
// console.log(newList.removeFromEnd());

// newList.print()


module.exports = LinkedListTail;