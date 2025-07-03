//  ! Introduction

// ? Jadi, apa itu module?

// * Module adalah sebuah cara bagi JavaScript untuk mengisolasi kode dari suatu file ke dalam sebuah file terpisah. Sehingga kode tersebut dapat digunakan berulang kali dengan cara di-export dari suatu file dan di-import ke file yang lainnya. Kita dapat melakukan export kode apapun pada JavaScript seperti string, object, array, number, hingga function.

// ! Mengapa menggunakan module?

//  ^ Maintainability
// Mempermudah jika kita ingin menambahkan, menghapus, dan merubah kode kita karena tidak mempengaruhi keseluruhan aplikasi kita.
//  Merubah satu module lebih mudah ketika module dipisahkan dari potongan kode lainnya daripada merubah dalam satu file yang terdiri dari ratusan ribu kode.

//  ^ Penggunaan Nama Variabel
// Module memudahkan kita untuk memberikan alias nama variabel yang di-import.

//  ^ Reusable Code


// ? Membuat module pada lokal direktori kita

<script type="module" src="index.js"></script>

// ! 📝  Catatan:

// ! Untuk menjalankan module pada lokal direktori, kamu harus menggunakan static-sever seperti Live Server pada Visual Studio Code.