const arr = [1, 2, 3, 'a', 'b', 'c', true, false, false, {}, {}, [], [], []]

let numCount = 0
let strCount = 0
let boolCount = 0
let objCount = 0
let arrCount = 0

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
        numCount++
    } else if (typeof arr[i] === 'string') {
        strCount++
    } else if (typeof arr[i] === 'boolean') {
        boolCount++
    } else if (arr[i] instanceof Object && !Array.isArray(arr[i])) {
        objCount++
    } else if (Array.isArray(arr[i])) {
        arrCount++
    }
}

console.log(`Jumlah number: ${numCount}`)
console.log(`Jumlah string: ${strCount}`)
console.log(`Jumlah boolean: ${boolCount}`)
console.log(`Jumlah object: ${objCount}`)
console.log(`Jumlah array: ${arrCount}`)