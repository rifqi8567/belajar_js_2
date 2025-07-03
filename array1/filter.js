// ! .filter()

// ? .filter() berfungsi untuk membuat sebuah array baru dengan memperhatikan kondisi tertentu pada setiap elemen dari array yang sudah ada.

// **Callback function pada .filter() memiliki 3 parameter yang dapat digunakan sesuai kebutuhan:
// value yaitu isi dari tiap elemen yang diproses.
// index (optional) yaitu nomor index tiap elemen.
// array (optional) yaitu array itu sendiri.

//  setruktur kode
// arr.filter((value, index, array) => {
//   // kode program
// });


// cth
let angka = [1, 2, 3, 4, 5];

let angkaFilter = angka.filter((item) => {
    return item > 2;
});

console.log(angkaFilter); // Output: [1]


let angka2 = [1, 2, 3, 4, 5];
let angkaFilter2 = angka2.filter((item) => item > 2);
console.log(angkaFilter2)

const fruits = ['Jambu', 'Jeruk', 'Apel', 'Mangga', 'Strawberry', 'Jeruk', 'Apel'];

const apples = fruits.filter(item => {
  return item === 'Apel'; // hanya menampilkan elemen array fruits yang bernama 'Apel'
});

console.log(apples);