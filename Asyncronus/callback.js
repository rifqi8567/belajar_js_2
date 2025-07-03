//  ! Callback

// ? Callback adalah sebuah function, namun bedanya dengan function pada umumnya adalah pada cara eksekusinya.

// ? Jika function pada umumnya dieksekusi secara langsung, sedangkan callback dieksekusi di dalam function lain melalui parameter.

// !Kita akan menemukan proses callback asynchronous pada proses ajax, komunikasi HTTP, Operasi file, timer dan sebagainya.

//! Synchronous dan Asynchronous pada JavaScript

// ^Contoh proses synchronous:

function proses1() {
  console.log("proses 1 selesai dijalankan");
}

function proses2() {
  console.log("proses 2 selesai dijalankan");
}

function proses3() {
  console.log("proses 3 selesai dijalankan");
}

proses1();
proses2();
proses3();

//^ Contoh proses asynchronous:

function proses4(){
    console.log("Proses 4 selesai di jalankan");
}

function proses5(){
    setTimeout(function(){
        console.log("Proses 5 di jalankan");
    }, 100);
}

function proses6(){
    console.log("Proses 6 selesai di jalankan");
}

proses4();
proses5();
proses6();


// !Menggunakan Callback

console.log("pake Callback");

function proses7() {
  console.log("proses 7 selesai dijalankan");
}

function proses8(callback) {
  setTimeout(function () {
    console.log("proses 8 selesai dijalankan");
    callback();
  }, 100);
}

function proses9() {
  console.log("proses 9 selesai dijalankan");
}
proses7();
proses8(proses9);


// ! Membuat callback function

// *Pertama, kita deklarasikan dahulu function greeting(name) yang ingin kita panggil dalam callback function lain. Function greeting(name) berisi console.log() yang menerima sebuah parameter name.

function greeting(name) {
    console.log(`Halo ${name}, selamat datang di Skilvul!`);
}

// * Kedua, buat sebuah function introduction(firstName, lastName, callback) dengan menerima parameter firstName, lastName dan callback lalu di dalam function tersebut kita menggabungkan parameter firstName dan lastName ke dalam variabel fullName untuk mengirimkannya ke dalam callback.

function introduction(firstName, lastName, callback){
    const fullName = `${firstName}, ${lastName}`;

    callback(fullName);
}

introduction("Miftah", "Faris", greeting);


greeting("hafiz");