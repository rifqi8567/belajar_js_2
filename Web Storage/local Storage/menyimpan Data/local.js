// !Local Storage - Menyimpan Data

// *Pernahkah kita saat melakukan pencarian pada sebuah situs lalu situs tersebut menampilkan riwayat pencarian kita? Iya, data pencarian tersebut disimpan ke dalam local storage untuk diolah menjadi riwayat pencarian. Itulah salah satu contoh penerapan dari local storage pada aplikasi web.

// ? Local storage memiliki karakteristik sebagai berikut:
// ^Menyimpan data tanpa tanggal kadaluarsa.
// ^Data tidak akan dihapus ketika web browser ditutup dan akan tersedia seterusnya selama kita tidak menghapus data local storage pada web browser.
// ^Dapat menyimpan data hingga 5MB.
// ^Hanya dapat menyimpan data string.

// ~ Untuk menyimpan data pada local storage, kita menggunakan method setItem() yang membutuhkan 2 parameter. Parameter pertama adalah key yang ingin kita simpan dan parameter kedua adalah data (value) dari key yang akan disimpan.

localStorage.setItem('key', value);



// cth

// Buat kode kamu di bawah ini

// Menyimpan data pertama
localStorage.setItem("search", "pencarian 1");

// Menyimpan data kedua (array diubah jadi string dengan JSON.stringify)
const hewan = ["kucing", "anjing", "kambing"];
localStorage.setItem("hewan", JSON.stringify(hewan));
