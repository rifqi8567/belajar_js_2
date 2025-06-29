// ! .reduce()

// ? Melakukan operasi matematika (penjumlahan, pengurangan, perkalian, dan pembagian) pada elemen array atau sekedar mengubah struktur data array

// ! .reduce() digunakan untuk memodifikasi array menjadi:
// Sebuah data/nilai baru
// Struktur data baru sesuai kebutuhan kita. Umumnya digunakan untuk melakukan operasi matematika.

// ?Callback function pada .reduce() memiliki 5 parameter yang dapat digunakan sesuai kebutuhan:
// total yaitu nilai awal (initial value) atau akumulasi dari perhitungan sebelumnya.
// value yaitu isi dari tiap elemen yang diproses.
// index (optional) yaitu nomor index tiap elemen.
// array (optional) yaitu array itu sendiri.
// initialValue (optional) yaitu nilai awal yang akan di passed sebagai initial value di poin 1. Dapat diisi apa saja (nomor, teks, array, atau object)

let arrAngka = [1, 2, 3, 4, 5];

let hasil = arrAngka.reduce((total, value) => {
  return total + value;
});

console.log(hasil);
// Output: 15


// ! Menggunakan initial value pada .reduce()

let arrAngka1 = [1, 2, 3, 4, 5];

let hasil1 = arrAngka.reduce((total, value) => {
  return total + value;
}, 5); // initial valuenya adalah 5

console.log(hasil1);
// Output: 20


// !Mengubah struktur data dengan .reduce()

let fruits = ['Jambu', 'Apel', 'Mangga', 'Jambu', 'Jeruk', 'Apel']

let fruitList = fruits.reduce((list,fruit) => {
  if(list[fruit]) { // memeriksa apakah buah tersebut sudah ada dalam objek atau belum
    list[fruit] = list[fruit] + 1; // jika ada, nilainya + 1
  } else {
    list[fruit] = 1; // jika belum ada, beri nilai 1
  }
  return list; // mengembalikan objek
}, {}); // initial valuenya adalah objek

console.log(fruitList);