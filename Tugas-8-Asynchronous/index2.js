var readBooksPromise = require('./promise.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 }
]

// Lanjutkan code untuk menjalankan function readBooksPromise 
async function asyncCall() {
    let t = 10000
    for (let j = 0; j < books.length; j++) {
        t = await readBooksPromise(t, books[j]).then(function (sisaWaktu) {
            return sisaWaktu;
        })
            .catch(function (sisaWaktu) {
                return sisaWaktu;
            })
    }
    console.log("selesai")
}

asyncCall();
