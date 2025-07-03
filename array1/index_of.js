// !.indexOf()
// ?.indexOf() melakukan iterasi elemen array dari kiri ke kanan kemudian memberikan nilai balik berupa nomor index dari elemen yang dicari atau mengembalikan -1 jika tidak ditemukan.
// **Untuk melakukan pengecekan apakah terdapat data yang kita cari dalam elemen array yang kita punya, kita dapat menggunakan method


// ?.indexOf() memiliki 2 argumen pada callback function yang dapat digunakan sesuai kebutuhan:
// value yaitu nilai elemen pada array yang ingin dicari
// startIndex (optional) yaitu titik awal pencarian

//! arr.indexOf(value, startIndex);


// ver.foreach
let arrBuah = ["Jeruk", "Apel", "Semangka", "Apel"];
let indexApel = 0;

arrBuah.forEach((item, index) => {
  if (item == "Apel") {
    indexApel = index;
  }
});

console.log(indexApel);

//ver.index of

let buahSaya = ['Apel', 'Mangga', 'Semangka', 'Apel'];
let indexBuah = buahSaya.indexOf("Apel")
console.log(indexBuah)
// simple nya index of ini hanya akan mengambil data yg pertama walaupun ada data lain yg setelahnya memiliki value yg sama 

//cara agar mendaptkan apel yg ke 2
let buahSaya1 = ['Apel', 'Mangga', 'Semangka', 'Apel'];
let indexBuah1 = buahSaya.indexOf("Apel", 2)  
console.log(indexBuah1)


