const fibonacci = (num) => {
    const arr = [0,1];
    let sum = 0
    let a = 0
    let b = 1
    for(let i = 2; i < num; i++){
        // a   b   sum
        // 0 + 1 = 1
        // 1 + 2 = 3
        // 2 + 3 = 5
        // 3 + 5 = 8
        // 5 + 8 = 13
        // 8 + 13 =21

        // solve this in one line without extravariables:
        // arr.push(arr[i-1] + arr[i-2])


        sum = a + b;
        a = b;
        b = sum;
        arr.push(sum);
    }
    return arr;
    // Big O(n)
}


console.log('FIBONACCI: ', fibonacci(7))

const fibonacciRecursion = (num) => {
    if(num < 2) return num;

    return fibonacciRecursion(num - 1) + fibonacciRecursion(num - 2)
    // O(2^n)
}

console.log('FIBONACCI RECURSION: ', fibonacciRecursion(6))

// Factorial

const factorial = (num) => {
    let product = 1
    for(let i = 2; i <= num; i++){
        // p   i
        // 1 * 1 = 1
        // 1 * 2 = 2
        // 2 * 3 = 6
        // 6 * 4 = 24
        // 24 * 5 = 120

        product *= i;
    }
    return product;

    //O(n)
}

console.log('FACTORIAL: ', factorial(1));

//Factorial recursion

const factorialRecursion = (num) => {
    if(num < 2) return 1;
    return factorialRecursion(num-1) * num;
//   fac(5) = fac(4) * 5 = 24 * 5 = 120 
//   fac(4) = fac(3) * 4 = 6 * 4  = 24
//   fac(3) = fac(2) * 3 = 2 * 3  = 6
//   fac(2) = fac(1) * 2 = 1 * 2  = 2
//   fac(1) =  1 


// O(n)
}

console.log('FACTORIAL RECURSION: ', factorialRecursion(5));

// Prime number

const primeNumber = (num) => {
    let prime = true;
    if(num < 2) return false;
    // No optimized: < num
    for(let i = 2; i <= Math.sqrt(num); i++){
        // p   i
        // 5 / 1 = 5
        // 5 / 2 = 2.5
        // 5 / 3 = ...
        // 5 / 4 = ...
        // 5 / 5 = 1;
        if( num % i === 0) prime = false;
    }
    return prime;
    // No optimized: 0(n)
    // Optimized: O(sqrt(n))
}

console.log('IS PRIME?: ', primeNumber(78))

const powerOfTwo = (num) => {
    let isPowerOfTwo = false;
    let exponent = 0;

    for(let i = 0; i < num; i++){
        // num
        //  1 = 2 pow 0
        //  2 = 2 pow 1
        //  4 = 2 pow 2
        //  8 = 2 pow 3
        // 16 = 2 pow 4
        // 32 = 2 pow 5
        // 64 = 2 pow 6

        if(num === Math.pow(2, i)){
            isPowerOfTwo = true;
            exponent = i
        } 
    }
    return isPowerOfTwo ? `${isPowerOfTwo}: 2(${exponent})` : 'false';
}

console.log('POWER OF TWO: ', powerOfTwo(128))

const powerOfTwoDivision = (num) => {
    let isPowerOfTwo = true
    while(num >= 2 && isPowerOfTwo === true){
        if(num % 2 !== 0){
            isPowerOfTwo = false;
        }
        num = num / 2
    }
    return isPowerOfTwo;

    // O(log(n))
}

// console.log('POWER OF TU BY DIVISION: ', powerOfTwoDivision(1));
// console.log('POWER OF TU BY DIVISION: ', powerOfTwoDivision(2));
console.log('POWER OF TU BY DIVISION: ', powerOfTwoDivision(5));

const powerOfTwoBitWise = (num) => {
    // And person alone makes a "summatory" between the numbers (converted to binary) you put beside it.
    // This solution hs to do with the binary equivalence of the natural number. 
    // Just with the numbers that are pow of two this summatory between the pow of two and the previews one number is 0:
    // Because with those numbers the number of digits increase:

// No.	Binary Number  Summatory or whatever it is
// 1	1               1
// 2	(10)              01 & 00 = 0 -> pow of two
// 3	11              10 & 11 = 1 (because there i a 1 in the beigining of both digits) -> NOT pow of two
// 4	(100)             011 & 000 = 0 -> pow of two
// 5	101             100 & 101 = 1 -> NOT pow of two 
// 6	110             101 & 110 = 1 -> """"
// 7	111             110 & 111 = 1 -> """"
// 8	(1000)            0111 & 1000 = 0 -> pow of two

    if(num < 1) return false;
    return (num & (num - 1)) === 0;
    // O(1)
}

console.log('POWER OF TWO BITWISE: ', powerOfTwoBitWise(63));

// LINEAR SEARCH

const linearSearch = (arr, t) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === t) return i;
    }
    return -1;

    // O(n)
}

console.log('LINEAR SEARCH: ', linearSearch([1, 8, 10, 2, 5, 3, 9], 21))

// BINARY SEARCH

const binarySearch = (arr, t) => {
    let left = 0;
    let right = arr.length - 1;
    while(right >= left){
        let middle = Math.floor((left + right) / 2);
        // [2,3,4,5,6,8,10,15,17,20,21,30], t = 20;
        // left = 0 --> 6 --> 9
        // right = 11 --> 9
        // middle = (11+0) / 2 = 5 --> (11+6) / 2 = 8 --> (11+9) / 2 = 10 --> (9+9) / 2 = 9
        if(t === arr[middle]) return middle;
        // 20 > 8
        // 20 > 17
        
        if(t > arr[middle]) {
            
            left = middle + 1;
        } else {
            // 20 < 21
            right = middle - 1;
        }      
    }
    return -1

    // O(n)
}

console.log('BINARY SEARCH: ', binarySearch([2,3,4,5,6,8,10,15,17,20,21,30], 50));

// RECURSIVE BINARY SEARCH

const search = (arr, t, left, right) => {
    let middle = Math.floor((left + right) / 2);

    if(t === arr[middle]) return middle;
    if(left > right) return -1;
    if(t > arr[middle]){
        left = middle + 1;
        return search(arr, t, left, right);
    } else {
        right = middle - 1;
        return search(arr, t, left, right);
    }
}
const recursiveBinarySearch = (arr, t) => {
    return search(arr, t, 0, arr.length - 1);

    // O(log(n))
}


console.log('RECURSIVE BINARY SEARCH: ', recursiveBinarySearch([2,3,4,5,6,8,10,15,17,20,21,30], 21))

// SORTING ALGORITHMS

// BUBBLE SORT

const bubbleSort = (arr) => {
    // No sé por qué funciona
    let aux;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
                if(arr[i] < arr[j]) {
                    aux = arr[i];
                    arr[i] = arr[j];
                    arr[j] = aux; 
                }  
        }
    }
    return arr;
}

const bubbleSortDoWhile = (arr) => {
    let swapped;
    let aux;
    do {
        swapped = false;
        for(let i = 0; i < arr.length - 1; i++){
            if(arr[i] > arr[i+1]){
                aux = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = aux;
                swapped = true;
            }
        }
    } while(swapped)
    return arr;

    // O(n^2)
}

const bubbleSortRecursion = (arr, swapped = false) => {
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] > arr[i+1]){
            let aux;
            aux = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = aux;
            swapped = true;
        }
    }
    if(swapped){
        return bubbleSortRecursion(arr, false)
    } else {
        return arr;
    }
}

console.log('BUBBLE SORT: ', bubbleSort([-6,-8,5,1,10,11,7,2]))
console.log('BUBBLE SORT DO WHILE: ', bubbleSortDoWhile([-6,-8,5,1,10,11,7,2]))
console.log('BUBBLE SORT RECURSION: ', bubbleSortRecursion([-6,-8,-15,1,10,11,7,2]))

const insertionSort = (arr) => {
    for(let i = 1; i < arr.length; i++){
        let numberToInsert = arr[i];
        let j = i - 1;
        //j stands for the index of the sorted element, that of the left part
        while(numberToInsert < arr[j] && j >= 0){
            arr[j+1] = arr[j];
            j -= 1;
        }
        arr[j+1] = numberToInsert;
    }
    return arr;

    // O(n^2)
}

console.log('INSERTION SORT: ', insertionSort([-6,-8,-15,1,10,11,7,2]))

// [-6,-8,-15,1] 2 [10,11,7]
// [-6-8-15] 1      7 [10, 11]
// -15 [-6 -8]        10 [11]
// -8 [-6]
// [-15, -8, -6, 1, 2, 7, 10, 11]

const quickSort = (arr) => {

    if(arr.length < 2) return arr;

    let pivot = arr[arr.length-1];
    const arrRight = [];
    const arrLeft = [];

    for(let i = 0; i < arr.length-1; i++){
        if(pivot > arr[i]) arrLeft.push(arr[i]);
        else arrRight.push(arr[i])
    }
    return [...quickSort(arrLeft), pivot, ...quickSort(arrRight)]
    
    // Worst case: O(n^2)
    // Average case O(log(n))
    
}

console.log('QUICK SORT: ', quickSort([-6,-8,-15,1,10,11,7,2]))

// Merge Sort

const merge = (arrLeft, arrRight) => {
    const sortedArr = [];

    while(arrLeft.length > 0 && arrRight.length > 0 ){
        if(arrLeft[0] < arrRight[0]) {
            sortedArr.push(arrLeft.shift())
        } else {
            sortedArr.push(arrRight.shift())
        }
    }

    return [...sortedArr, ...arrLeft, ...arrRight]

}

const mergeSort = (arr) => {
    if(arr.length < 2) return arr;

    const arrLeft = arr.slice(0, Math.floor(arr.length/2));
    const arrRight = arr.slice(Math.floor(arr.length/2));

    return merge(mergeSort(arrLeft), mergeSort(arrRight))
}

console.log('MERGE SORT: ', mergeSort([-6,-8,-15,1,10,11,7,2]))

