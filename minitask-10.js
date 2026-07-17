// Manual Version for Built-in Method includes()

// Params: Array
// Output: Boolean 

const pets = ['Cat', 'Dog', 'Whale']

// Built-in Method Case
console.log(pets.includes('Monyet'))

// Manual Case
const checkIncludes = (keyword) => {
    let isIncluded = false
    
    for (let pet of pets) {
        if (pet === keyword) {
            isIncluded = true
            return `${keyword} included in pet list.`
        }
    }

    return `${keyword} not included (not found).`
}

console.log(checkIncludes('Monyet'))