//  ! Export and Import

//  Untuk bisa menghubungkan file antar JavaScript kita bisa menggunakan export dan import sehingga memungkinkan untuk saling menggunakan kode antar module.

//  ! Export
// ? Export digunakan untuk meng-export variabel pada file JavaScript. Variabel yang di_export_ dapat berisi data seperti string, object, array, hingga function. Hal ini dilakukan agar file JavaScript tersebut dapat dijadikan sebuah module, sehingga variabel yang telah di-export dapat digunakan pada file JavaScript lain dengan menggunakan import.

//  ^ Penggunaan export diawali dengan kata kunci export kemudian diikuti oleh nama variabel yang ingin di-export atau bisa digunakan di akhir kode kita, dengan nama variabel yang ingin di export.

export let name = "Thoriq";

//  ! Kita tidak bisa langsung meng-export data tanpa disimpan ke dalam variabel terlebih dahulu 

//  Export pada object

export let orang = {
    name: "Thoriq",
    umur: 25,
    alamat: "Jl.Kemang Raya",

}

// export function

export function sayHello(user) {
    console.log(`Hello, ${user}!`);
}

// Mengexport variable name, object orang dan function sayHello sekaligus
export { name, orang, sayHello };


// ! Import
// ? Import diibaratkan sebagai pasangan dari export. Jadi import digunakan untuk menggunakan variabel yang sudah di-export dari module lainnya.

// import variabel 

import { data } from "./namaModul.js";

// Contoh penggunaan dari import dengan menggunakan file export dari contoh di atas :

import { name, orang, sayHello } from "./user.js";

// Menggunakan hasil import
console.log(name); // Output: Thoriq
console.log(orang); // Output: {nama: "Thoriq", umur: 25, alamat: "Jl. Kemang Raya"}
sayHello(orang.nama); // Output: Hello, Thoriq!

