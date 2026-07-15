const belanja = 1200000
let diskon = 0
let total

if (belanja > 1000000) {
    diskon = 0.1
} else if (belanja >= 500000) {
    diskon = 0.05
}

total =  belanja - (belanja * diskon)
console.log(`Diskon: ${diskon * 100}%`)
console.log(`Total belanja: ${total}`)