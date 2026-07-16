const movie = {
    // Properti
    id: 1,
    title: 'Shaolin Soccer',
    image: 'abcd.jpg',
    genre: ['action', 'comedy'],
    cast: [
        {
            name: 'Jackie Chan',
            role: 'Lead',
        },
        {
            name: 'Stephen Chow',
            role: 'Supporting',
        },
        {
            name: 'Zhang Ziyi',
            role: 'Supporting',
        }
    ],
    
    // Method getter utk menampilkan judul, gambar, dan genre
    movieInfo : function () {
        return `Movie Info\nJudul: ${this.title}\nGambar: ${this.image}\nGenre: ${this.genre}`
    },

    // Method getter menampilkan list nama cast
    castInfo : function () {
        for(i=0; i < this.cast.length; i++){
            console.log(`Cast ${i+1}: ${this.cast[i].name}`)
        }
        return
    },

    // Method setter untuk mengubah judul movie
    changeTitle : function (newTitle) {
        if (typeof newTitle !== 'string') {
            console.log("Gagal update. Bukan string.")
            return
        }

        console.log('Berhasil diupdate.')
        return this.title = newTitle
    },

    // Method setter untuk ubah gambar
    changeImage : function (newImage) {
        if (typeof newImage !== 'string') {
            console.log("Gagal update. Bukan string.")
            return
        }

        console.log('Berhasil diupdate.')
        return this.image = newImage
    }
}

console.log(movie.movieInfo())
movie.castInfo()
movie.changeTitle('Apalah')
movie.changeImage('efgh.png')