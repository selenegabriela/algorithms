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