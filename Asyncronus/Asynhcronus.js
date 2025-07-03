// !Introduction

// ??Bahasa pemrograman JavaScript termasuk ke dalam single-thread language atau synchronous yang artinya hanya dapat mengeksekusi satu perintah pada satu waktu dan harus menunggu satu perintah tersebut selesai sebelum melanjutkan perintah selanjutnya.

// ? Synchronous adalah saat kita mengeksekusi perintah satu persatu dan berurutan

// cth
console.log("antrian 1");
console.log("antrian 2");
console.log("antrian 3");


// ! Apa itu Asynchronous?

// ? Asynchronous yang biasa dikenal juga dengan sebutan non-blocking mengizinkan komputer kita untuk memproses perintah lain sambil menunggu suatu proses lain yang sedang berlangsung. Ini artinya kita bisa melakukan lebih dari 1 proses sekaligus (multi-thread)

// & Menjalankan Asynchronous pada JavaScript

// setTimeout(function, milliseconds) digunakan untuk simulasi pemanggilan kembali proses asynchronous yang sedang/sudah selesai dijalankan. Pemanggilan hanya dilakukan 1 kali.

// setInterval(function, milliseconds) digunakan untuk simulasi pemanggilan proses asynchronous yang sedang/sudah dijalankan dalam interval waktu tertentu. Pemanggilan dilakukan berkali-kali sesuai interval waktu yang ditentukan.

// Contoh asynchronous menggunakan setTimeout():

setTimeout(() => {
    console.log("cuci baju");
}, 1000); //1000 milidetik = 1 detik
console.log("Menyapu");
console.log("Mengepel");
console.log("Mengelap");


// ! Menerapkan Asynchronous pada Aplikasi JavaScript

// ^Namun, permasalahan terjadi saat menggunakan asynchronous, ada satu perintah yang bergantung pada output eksekusi asynchronous sebelumnya. Dengan kata lain fungsi berjalan kejar-kejaran (race condition), sehingga data yang kita inginkan menjadi kosong. Sebagai contoh:

// ^const user = getUser(); // fungsi async untuk mengambil data user dari API
// ^console.log(user) // Output: null

// * Untuk mengatasi masalah tersebut, kita dapat menggunakan:

// ? Callback.
// ~ Promises.
// ^ Async / Await.


setTimeout(() => {
  console.log("Proses 1"); // proses asynchronous
}, 1000);
console.log("Proses 2");
console.log("Proses 3");
console.log("Proses 4");
