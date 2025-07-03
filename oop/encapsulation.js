//  ! Encapsulation
// ? Konsep ini dimaksudkan untuk membungkus data variabel dan fungsi menjadi satu kesatuan. Dengan membungkusnya, bisa menjadikannya sebuah objek yang memiliki properti dan method.

// ^ Tujuan lain dari encapsulation adalah membatasi hak akses pada properti yang dimiliki oleh suatu objek. Sehingga data tetap terjaga dan hanya bisa diakses melalui method.

// !📝  Catatan:

// !JavaScript tidak memiliki fitur khusus untuk membatasi akses sebuah properti. Cara di bawah hanya bertujuan untuk memberi pemahaman terkait encapsulation.

class NamaClass {
    constructor(nilai){
        var _properti = nilai;

        // getter
        this.getProperti = function(){
            return _properti;
        };

        // setter
        this.setProperti = function(nilaiBaru){
            _properti = nilaiBaru;
        };
    }

    // method
}


// cth
class hewan {
    constructor(nama){
        let _nama = nama;

        // getter
        this.getnama = function() {
            return _nama
        };

        // setter
        this.setnama = function(nama) {
            _nama = nama;
        };

    }
}

// ??Penjelasan dari kode di atas adalah sebagai berikut:

// Deklarasikan properti seperti mendeklarasikan variabel biasa.
// Kemudian beri tanda _ untuk membedakan antara properti dari parameter constructor
// Method setter dan getter untuk mengakses nilai properti.


// !Sekarang properti pada class Hewan sudah tidak bisa diakses secara langsung seperti ini:

let kucing = new hewan("Tom");
console.log(kucing.nama)

// ^ Untuk mengakses properti tersebut, kamu perlu menggunakan getter untuk mengambil nilai atau setter untuk mengubah nilai:

let kucing1 = new hewan("Tom");
console.log(kucing1.getnama());

// update nama hewan
kucing1.setnama('Delta');
console.log(kucing1.getnama());