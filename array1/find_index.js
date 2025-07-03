// ! .findIndex()
// ? .findIndex() yang digunakan untuk mendapatkan nomor index dari elemen yang dicari.
// ? .findIndex() memberikan nilai balik berupa nomor index dari elemen pertama yang ditemukan jika memenuhi kondisi pada return statement atau -1 jika tidak ditemukan.

//  ** Callback function pada .findIndex() memiliki 3 parameter yang dapat digunakan sesuai kebutuhan:
// value yaitu isi dari tiap elemen yang diproses
// index (optional) yaitu nomor index tiap elemen
// array (optional) yaitu array itu sendiri

// struktur 
//! arr.findIndex((value, index, array) => {
// !  // kode program
// !});

// ? Secara fungsionalitas, .findIndex() hampir mirip seperti .indexOf() yang digunakan untuk mendapatkan nomor index dari elemen pada sebuah array yang dicari. Akan tetapi .findIndex() dapat melakukan pencarian berdasarkan kondisi yang diinginkan.

// ver.indexof()
let arrHewan = ["Kucing", "Burung", "Gajah", "Singa", "Jerapah"];
let index = arrHewan.indexOf("Burung")
console.log(index)

// ver. find index

let hewanSaya =  ["Kucing", "Burung", "Gajah", "Singa", "Jerapah"];
let indexHewan = hewanSaya.findIndex ((value)=>{
    return value[0] === "B"  //Dengan cara ini, kita dapat melakukan pencarian menggunakan suatu kondisi, tanpa harus mengetahui nilai datanya secara langsung
})
console.log(indexHewan)
console.log("Hewannya adalah:", hewanSaya[indexHewan]); // "Burung"
