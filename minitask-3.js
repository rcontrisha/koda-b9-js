let kembalian = 70000

let gocap = 0
let ceban = 0
let goceng = 0
let duaribu = 0
let seribu = 0

while (kembalian != 0) {
    if (kembalian - 50000 >= 0) {
        kembalian -= 50000
        gocap++
    } else if (kembalian - 10000 >= 0) {
        kembalian -= 10000
        ceban++
    } else if (kembalian - 5000 >= 0) {
        kembalian -= 5000
        goceng++
    } else if (kembalian - 2000 >= 0) {
        kembalian -= 2000
        duaribu++
    } else if (kembalian - 1000 >= 0) {
        kembalian -= 1000
        seribu++
    }
}

console.log(`Kembalian:`)
console.log(`Gocap: ${gocap} lembar`)
console.log(`Ceban: ${ceban} lembar`)
console.log(`Goceng: ${goceng} lembar`)
console.log(`Duaribu: ${duaribu} lembar`)
console.log(`Seribu: ${seribu} lembar`)