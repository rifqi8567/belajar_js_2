// !.find()
// ? .find() yang dapat digunakan untuk melakukan pencarian**.

// ? .find() memberikan nilai balik berupa nilai tunggal (single value) dari elemen pertama yang ditemukan jika memenuhi suatu kondisi pada return statement.

// ** Callback function pada .find() memiliki 3 parameter yang dapat digunakan sesuai kebutuhan:

// value yaitu isi dari tiap elemen yang diproses
// index (optional) yaitu nomor index tiap elemen
// array (optional) yaitu array itu sendiri

// struktur .find()
//! arr.find((value, index, array) => {
//!   // kode program
//! });

// ver.filter

let people = [
    {
        name : 'Ahmad',
        age : 20
    },
    {
        name : 'Doni',
        age : 21
    },
  
];

let ahmadFind = people.find(item => item.name === 'Ahmad');
let ahmadFilter = people.filter(item => item.name === 'Ahmad');

console.log(ahmadFind) // bentuk object
console.log(ahmadFilter)  // bentuk array of object


//  ? kesimpulan bahwa .find() baik digunakan jika kita hanya membutuhkan single value dari elemen array yang kita cari sesuai dengan kondisi yang kita butuhkan.

// cth 
let hewan = ["Harimau", "Gajah", "Jerapah", "Ular"];
let cariHewan = hewan.find(function(item){
    return item .startsWith("J") && item.endsWith("h")
});
console.log(cariHewan)
// Buat kode kamu di bawah ini