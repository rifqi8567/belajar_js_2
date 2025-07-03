// ! Inheritance

// ^ Sebelum mewariskan suatu class, pastikan kamu sudah memiliki:

// ? Parent class, yang akan menurunkan properti dan method-nya kepada class lain.
// ? Child class, yang akan menerima turunan dari parent class.

// * Untuk dapat menerima turunan dari parent class, child class harus menggunakan kata kunci extends dan diikuti oleh nama parent class-nya.

//^ class NamaKelasB extends NamaKelasA {
//^     //method
//^ }

// ^ Jika kamu ingin menambahkan properti dan ingin memberikan datanya secara langsung ketika objek dibuat, kamu harus menggunakan method super() pada constructor child class agar dapat mengakses properti yang sama pada parent class.

// class NamaKelasB extends NamaKelasA {
//     constructor() {
//         super();
//         //properti
//     }

//     //method
// }

// ! 📝  Catatan:

// ! Method super() digunakan untuk memanggil constructor pada parent class

class hewan {
  constructor(nama, kaki) {
    this.nama = nama;
    this.kaki = kaki;
  }

  tidur() {
    return `${this.nama} sedang tidur`;
  }
}

// class hewan mewarisi class kuching

class kuching extends hewan {
    constructor(nama, kaki, makanan){
        super(nama, kaki);
        this.makanan = makanan;
    }

    mencuri() {
        return `${this.nama} mencuri ${this.makanan}`;
    }
}

// membuat object dari kelas kuching
let kucing = new kuching("Tom", 4, "ikan");
console.log(kucing.nama);
console.log(kucing.tidur());
console.log(kucing.mencuri());
console.log(kucing.makanan);