// !Local Storage - Mengambil Data

// ? Untuk mengambil data yang telah tersimpan pada local storage, kita dapat menggunakan method getItem() yang membutuhkan 1 parameter. Parameter tersebut adalah key dari data yang kita inginkan.

localStorage.getItem('key');

// ? Dari kode di atas, kita dapat lihat bahwa kita memodifikasi variabel searchList menjadi:

 var searchList = JSON.parse(localStorage.getItem("searchKey")) || [];

//  * Maksud dari kode ini adalah variabel searchList nilai default-nya adalah data dari local storage dengan key searchKey. Namun jika data pada local storage dengan key searchKey tidak ada, maka isi variabel searchList dengan array kosong []. Lalu disini kita menggunakan JSON.parse() yang merupakan kebalikan dari JSON.stringify(), yaitu untuk mengubah string menjadi bentuk array kembali.


//  cth

// Langkah 1: Ambil data dari localStorage (masih berupa string)
let getHewanKakiEmpat = localStorage.getItem("hewan");

// Langkah 2: Ubah data dari string JSON ke array
let hewanKakiEmpat = JSON.parse(getHewanKakiEmpat);

// Langkah 3: Tampilkan di console
console.log(hewanKakiEmpat);