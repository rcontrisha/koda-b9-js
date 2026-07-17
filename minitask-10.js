// Manual Version for Built-in Method includes()

// Params: Array
// Output: Boolean 

const pets = ['Cat', 'Dog', 'Whale']

// Built-in Method Case
console.log(pets.includes('Monyet'))

// Manual Case
const checkIncludes = (keyword) => {
    for (let pet of pets) {
        if (pet === keyword) {
            return true
        }
    }

    return false
}

// console.log(pets)
console.log(checkIncludes('Monyet'))
// console.log(pets)