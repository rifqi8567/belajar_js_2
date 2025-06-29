// ! .map()
// ** Berbeda dengan .forEach(), .map() digunakan untuk melakukan perulangan sambil mengecek/melakukan operasi terhadap setiap elemen array, lalu memberikan nilai balik berupa array baru tanpa mengubah nilai pada array yang lama. */

// ? Callback function pada .map() memiliki 3 parameter dasar yang dapat digunakan sesuai kebutuhan:
// value yaitu isi dari tiap elemen yang diproses.
// index (optional) yaitu nomor index tiap elemen.
// array (optional) yaitu array itu sendiri.

let input = [100, 50, 60, 10];

let output = input.map(item => {
  return item/10;
});

console.log(output);
// Output [10, 5, 6, 1]

console.log(input);
// Output [100, 50, 60, 10] --> Nilai array pertama tidak berubah


let input1 = [100, 50, 60, 10];
let output1 = input.map(item => item/10);
console.log(output);
// Output [10, 5, 6, 1]

// ! Bedanya penggunaan .map() dengan .forEach() adalah:

// **Menggunakan .map() dalam menghasilkan array baru terlihat lebih simpel dan tidak kompleks.
// **Terdapat return yang mengembalikan nilai baru untuk disimpan ke dalam variabel baru.



