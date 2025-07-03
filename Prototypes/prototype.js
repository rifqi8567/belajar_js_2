//  ! Introduction

// ! Apa itu Prototyping pada JavaScript?

// ? JavaScript adalah bahasa pemrograman yang memiliki fitur prototype. Properti prototype pada JavaScript awalnya menggunakan objek kosong dan dapat ditambahkan anggota ke dalamnya jika dibutuhkan. Jadi, setiap kita membuat objek atau function, JavaScript akan menambahkan properti prototype secara otomatis.

// cth

// Mendeklarasikan function baru
function namaObject () {

}

// Menambahkan properti secara langsung menggunakan prototyping
namaObject.prototype.namaProperti = "isi Properti";

//Melihat prototype dari function
console.log(namaObject.prototype);

// Melihat hasil data
console.log(namaObject.prototype.namaProperti);


// ! Function Constructor
// ?Jika kita ingin membuat banyak objek dari class maka kita bisa membuat instance dari class tersebut seperti yang telah kita pelajari pada topik OOP sebelumnya:

// Membuat constructor
function Person (nama, age, hobby, job){
    this.nama = nama;
    this.age = age;
    this.hobby = hobby;
    this.job = job;
}

// Membuat instance

let Father = new Person("William", 30, "Play Games", "Entrepreneur");
let Mother = new Person("Aisyah", 20, "Cooking", "Accountant");

console.log(Father.nama);
console.log(Mother.nama);


// ! Namun saat ini kita tidak bisa menambahkan data constructor secara langsung. Perhatikan kode di bawah ini

//^  jadi kalo misalkan kita tambahkan properti di dalam Person maka hasil nya akan undefained
// cth
function Person1(name, age, hobby, job) {
  this.name = name;
  this.age = age;
  this.hobby = hobby;
  this.job = job;
}

// Tidak bisa menambahkan properti secara langsung
Person.nationality = "Indonesia";

let myFather = new Person("William", 30, "Play games", "Entrepreneur");
console.log(myFather.nationality)  //output nya undefained



function Skilvul(courseName, duration) {
  this.courseName = courseName;
  this.duration = duration;
}

Skilvul.price = 200000;

let jsIntermediate = new Skilvul("JS Intermediate", 3600);

// Melihat hasil data
console.log(jsIntermediate.courseName);
console.log(jsIntermediate.price);
 
