// ! Class

// ? Objek pada JavaScript, dapat langsung dibuat dengan cara menggunakan objek literal seperti berikut ini:

let hewan ={
     nama: "Kucing",
  kaki: 4,
  tidur: function(){
    return `${this.nama}, sedang tidur`;
  }
}

//  ! Bagaimana cara mengatasinya?
// jika object nya ada banyak

// ntuk mengatasi hal tersebut, kamu dapat menggunakan fitur class yang terdapat pada JavaScript.

// ! seteruktur kelas

class namaClass {
    constructor() {
        // properti
    }
    //method
}

// cth
class hewan1 {
    constructor(nama, kaki) {
        this.nama = nama; //properti
        this.kaki = kaki;
    }
    
    tidur() {   //method
        return `${this.nama} sedang tidur`
    }
}

// ^ Dari kode di atas, ada beberapa komponen yang perlu kamu perhatikan ketika membuat class:

// ? Constructor, yaitu method yang wajib ada pada class jika ingn menyimpan suatu properti. Ketika suatu objek dibuat menggunakan class, maka constructor-nya juga ikut terpanggil. Parameter pada constructor berguna untuk memberikan data kepada properti

// ? Properti, yaitu data objek yang akan disimpan. Properti berada di dalam constructor dan diawali oleh kata kunci this. Kata kunci this mewakili kepemilikan dari class itu sendiri.

//  ? Class method, merupakan method yang dapat dimiliki dari sebuah objek. Biasanya dibuat di bawah constructor.

// * Setelah class selesai dibuat, yang perlu dilakukan adalah membuat instance dari class tersebut. Objek dapat dibuat menggunakan kata kunci new kemudian dilanjutkan dengan nama class-nya. Jangan lupa untuk memberi argumen pada class yang dipanggil jika ingin memberikan data secara langsung sesuai dengan parameter yang terdapat pada constructor.


// ^ let nameObject = newNamaKelas(arg1, arg2);

// cth

let hewan2 = new hewan1("kucing", 4);
let hewan3 = new hewan1("ayam", 2);

console.log(hewan2.nama);
console.log(hewan3.nama);
console.log(hewan3.tidur());
console.log(hewan2.tidur());

