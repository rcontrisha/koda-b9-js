// Master function
function processArray (arr, processor) {
    const result = []
    
    if (!Array.isArray(arr)) {
        console.log('Input bukan array.')
        return
    }
    
    if (typeof processor !== 'function') {
        console.log('Processor bukan function.')
        return
    }

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        result[i] = processor(element)
    }

    return result
}

// Callback function
const showNumber = num => `Number: ${num}`
const makeDollar = num => `$${num}`
const addFive = num => num + 5

const numbers = [1,2,3,4,5]

console.log(processArray(numbers, showNumber))
console.log(processArray(numbers, makeDollar))
console.log(processArray(numbers, addFive))