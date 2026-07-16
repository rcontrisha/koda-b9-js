const data = {
    id: 1,
    meta: {
        author: 'Jane',
        tags: ['js', 'es6']
    }
}

const { id, meta: { author, tags:[tag1,] } } = data

console.log('ID: ', id)
console.log('Author: ', author)
console.log('Tag 1: ', tag1)