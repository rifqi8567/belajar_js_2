// ! Menghapus Elemen

// ^ Kita akan membuat file bernama elemen.js. Lalu kita akan menghapus elemen <h1> yang memiliki id="title" menggunakan method remove(). Kita harus mendapatkan terlebih dahulu elemen HTML yang ingin kita hapus menggunakan method getElementById("ID_ELEMEN_HTML") yang memerlukan parameter berupa value dari attribute id elemen HTML tersebut.

let h1 = document.getElementById("title");
h1.remove();