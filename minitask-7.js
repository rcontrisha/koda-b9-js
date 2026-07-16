const nilai = {
    matematika: 75,
    bahasa_inggris: 80,
    bahasa_indonesia: 90,
    ipa: 85
}

const calculateResult = ({matematika, bahasa_inggris, bahasa_indonesia, ipa}) => {
    let total = matematika + bahasa_inggris + bahasa_indonesia + ipa
    let avg = total/4

    return `Total Nilai: ${total}\nRata-rata: ${avg}`
}

console.log(calculateResult(nilai))