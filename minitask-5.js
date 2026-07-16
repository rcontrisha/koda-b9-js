const account = {
    id: 1,
    username: 'john_doe',
    password: 'password123',
}

const updatedPassword = '1234'

console.log('Account: ', account)

if (updatedPassword.length < 5) {
    console.log('Ganti password gagal. Password kurang dari 5 karakter.')
} else {
    let updatedAccount = {...account, password: updatedPassword}
    console.log('Ganti password berhasil.')
    console.log('Updated Account: ', updatedAccount)
}