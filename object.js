// !Object Prototyping

// ^Di dalam Object.prototype JavaScript engine menyediakan banyak sekali function atau built-in properties seperti toString(), valueOf(), dan masih banyak lagi.

// *Berikut adalah hasil dari prototype object jika dilakukan console.log():

console.log(Object);
console.log(Object.prototype);


// ! Menambahkan objek prototyping

// ^ Contoh struktur kode dasar untuk menambahkan properti pada sebuah objek menggunakan prototype:

//^ // Mendeklarasikan fungsi baru
// function NamaObject (parameter1, parameter2){
//     this.namaProperti1 = parameter1;
//     this.namaProperti2 = parameter2;
// }

//^ // Menambahkan properti secara langsung menggunakan prototyping
// NamaObject.prototype.namaProperti = "isi proprti";


//^ // Melihat hasil data
// console.log(namaObject.prototype.namaProperti);


// cth langsung

function Person(nama, age, hobby, job){
    this.nama = nama;
    this.age = age;
    this.hobby = hobby;
    this.job = job;
}

Person.prototype.nationality = "indonesia";

//  Buat instance ke dua
let myFather = new Person("William", 30, "Play games", "Entrepreneur");
let myMother = new Person("Jessica", 30, "Reading book", "Accountant");

// Melihat hasil data
console.log(myFather.nama); // Output: 'William'
console.log(myFather.nationality); // Output: 'Indonesia'
console.log(myMother.nama); // Output: 'Jessica'
console.log(myMother.nationality); // Output: 'Indonesia'


// !Menambahkan method/function prototyping

// function NamaObjek(parameter1, parameter2) {
//   this.namaProperti1 = parameter1;
//   this.namaProperti2 = parameter2;
// }

//^ // Menambahkan method
// NamaObjek.prototype.namaMethod = function () {
//   return "hasil dari fungsi";
// };


function Person(name, age, hobby, job) {
  this.name = name;
  this.age = age;
  this.hobby = hobby;
  this.job = job;
}

// Menambahkan properti secara langsung menggunakan prototyping
Person.prototype.nationality = "Indonesia";

Person.prototype.greeting = function(){
    return "Hello" + this.nama;
};

// Membuat instance ke dua
let myFather1 = new Person("William", 30, "Play games", "Entrepreneur");
let myMother1 = new Person("Jessica", 30, "Reading book", "Accountant");

// Melihat hasil data
console.log(myFather1.name); // Output: 'William'
console.log(myFather1.nationality); // Output: 'Indonesia'
console.log(myFather1.greeting()); // Output: 'Hello William'