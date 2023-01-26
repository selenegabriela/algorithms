// Fibonacci loop:

const fibonacciLoop = (n) => {
    let arr = [0,1];

    if(n === 1) return [0]

    for(let i = 2; i < n; i++){
        // 0 + 1 = 1
        // 1 + 1 = 2
        // 1 + 2 = 3
        // 2 + 3 = 5
        // 3 + 5 = 8
        arr[i] = arr[i-1] + arr[i-2]
    }
    return arr;

    // O(n)
}

console.log('FIBONACCI LOOP: ', fibonacciLoop(7))

const fibonacciRcursion = (n) => {
    if(n < 2) return n;    
    
    return fibonacciRcursion(n-1) + fibonacciRcursion(n-2)

    // O(2^n)
}

console.log('FIBONACCI RECURSION: ', fibonacciRcursion(7))

const fibonacciRecursionArr = (n) => {
    if(n === 0) return [0];
    if(n === 1) return [0, 1];
    const arr = fibonacciRecursionArr(n-1);
    return [...arr, arr[n-1] + arr[n-2]]

    // O(n)
}

console.log('FIBONACCI RECURSION ARR: ', fibonacciRecursionArr(7))

const factorial = (n) => {
    let product = 1;
    for(let i = 2; i <= n; i++){
        product *= i;
    }
    return product;
    // (O(n))
}

console.log('FACTORIAL: ', factorial(5));

const factorialRecursion = (n) => {
    if(n < 2) return 1;

    return factorial(n-1) * n;

    // (O(n))
}

console.log('FACTORIAL RECURSION', factorialRecursion(5));

const primeNumber = (n) => {
    let isPrime = true;
    if(n<2) return false;
    
    for(let i = 2; i <= Math.sqrt(n); i++){
        if(n % i === 0) isPrime = false;
    }
    
    return isPrime;
    // sqrt = O(sqrt(n))
    // no sqrt = O(n)
}

console.log('PRIME NUMBER: ', primeNumber(12));

const powerOfTwo = (n) => {
    let isPowerOfTwo = true;
    // 10 / 2 -> 5 / 2 = 2.5
    // 6 / 2  -> 3 / 2 = 1.5
    // 8 / 2  -> 2 / 2 = 1
    while(n > 1 && isPowerOfTwo === true){
        if(n % 2 !== 0) isPowerOfTwo = false;
        n = n / 2
    }
    return isPowerOfTwo;
    
    // O(log(n))
}

console.log('POWER OF TWO: ', powerOfTwo(17));

const powerOfTwoBitWise = (n) => {
    
    if(n < 1) return false;
    return (n & (n-1)) === 0;

    // O(1)
}

console.log('POWER OF TWO BITWISE: ', powerOfTwoBitWise(5))

const linearSearch = (arr, t) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === t) return i;
    }
    return -1;
    // O(n)
}

console.log('LINEAR SEARCH: ', linearSearch([11,2,5,1,8,9,7], 14));

const binarySearch = (arr, t) => {
    let left = 0;
    let right = arr.length-1;
    let middle = 0;
    
    while(right >= left){
        middle = Math.floor((left + right) / 2);
        console.log(middle, left, right)
        if(arr[middle] === t) return middle;

        if(arr[middle] > t){
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }
    return -1;

    // O(log(n))
}

console.log('BINARY SEARCH: ', binarySearch([1,4,5,7,8,9,10,11,13,25], 27));

const search = (left, right, arr, t) => {
    let middle = Math.floor((left + right) / 2);
    
    if(arr[middle] === t) return middle;
    if(left > right) return -1;

    if(arr[middle] > t) {
        return search(left, middle-1, arr, t);
    } else {
        return search(middle+1, right, arr, t);
    }
}

const binarySearchRecursive = (arr, t) => {
    let left = 0;
    let right = arr.length-1;
    
    return search(left, right, arr, t)

    // O(log(n))
}

console.log('BINARY SEARCH RECURSION: ', binarySearchRecursive([1,4,5,7,8,9,10,11,13,25], 25));

const bubbleSort = (arr) => {
    let swapped = true;
    let aux = 0;

    while(swapped){
        swapped = false;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > arr[i+1]) {
                aux = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = aux;
                swapped = true
            }
        }
    }
    return arr;

    // O(n^2)
}

console.log('BUBBLE SORT: ', bubbleSort([21,15,-10,8,5,7,3,95,6]));

const bubbleSortRecursion = (arr, swapped = false) => {
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[i+1]){
            aux = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = aux;
            swapped = true
        }
    }
    if(!swapped) return arr;
    else return bubbleSortRecursion(arr, false) 
}

console.log('BUBBLE SORT RECURSION: ', bubbleSortRecursion([21,15,-10,8,5,7,3,95,6]));
