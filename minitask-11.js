const printJohn = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = true

            if (isSuccess) {
                resolve('John')
            }
            
            reject('Terjadi Error')
        }, 1500);
    })
}

const printEd = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = true

            if (isSuccess) {
                resolve('Ed')
            }
            
            reject('Terjadi Error')
        }, 2000);
    })
}

const printJane = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const isSuccess = true

            if (isSuccess) {
                resolve('Jane')
            }
            
            reject('Terjadi Error')
        }, 500);
    })
}

// Menampilkan menggunakan async-await
const printer = async () => {
    console.log('Async-Await')
    console.log(await printJohn());
    console.log(await printEd());
    console.log(await printJane());
}
printer()

// Menampilkan menggunakan chaining then-catch
console.log('Chaining Then-Catch')
printJohn()
    .then((res) => {
        console.log(res)
        return printEd()
    })
    .then((res) => {
        console.log(res)
        return printJane()
    })
    .then((res) => { console.log(res) })
    .catch((e) => {
        console.log(e)
    })