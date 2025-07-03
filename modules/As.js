//  ! Export As dan Import As

// ? Pada topik ini, kita dapat memberi alias (nama pengganti) pada nama data yang ingin kita export maupun import. Sehingga kita tidak perlu mengubah nama pada data aslinya.

// ! Export As
// ? kamu dapat memberi alias pada nama variabel di suatu tipe data, objek, ataupun function yang ingin di-export dengan menggunakan export as.

// ^ export namaVariabelLama as namaVariabelBaru;

// cth

const warna = "Merah";
let orang = {
     nama: "Thoriq",
  umur: 25,
  alamat: "Jl. Kemang Raya",
};

function katakanHelo(user){
    console.log(`Helo, ${user}!`);
}

export { warna as color, orang as person, katakanHalo as sayHello };

// !Pada file JavaScript lain ketika kita ingin meng-import variabel warna, orang atau katakanHalo, caranya adalah seperti contoh di bawah ini:

import color from "./user.js";
import person from "./user.js";
import sayHello from "./user.js";

// ^kode di bawah ini akan error
import warna from "./user.js";
import orang from "./user.js";
import katakanHalo from "./user.js";

// !📝  Catatan:

// Penggunaan export as hanya bisa dilakukan dengan export secara sekaligus di akhir kode

// ! Import As

// ? Tidak hanya dapat memberi alias pada data yang di-export, kita juga dapat memberi alias pada saat melakukan import data menggunakan import as.

//  ^ import { namaVariabelLama as namaVariabelBaru } from "./namaModul.js";

export let orangBaru = {
  nama: "Thoriq",
  umur: 25,
  alamat: "Jl. Kemang Raya",
};

export function katakanHalo(user) {
  console.log(`Hello, ${user}!`);
}
// file index.js tempat mengimport
import {
  warnaKesukaan as favoriteColor,
  orangBaru as newPerson,
  katakanHalo as sayHello,
} from "./user.js";

console.log(favoriteColor); // Output: Merah
console.log(newPerson); // Output: {nama: "Thoriq", umur: 25, alamat: "Jl. Kemang Raya"}
sayHello(newPerson.nama); // Output: Hello, Thoriq!
