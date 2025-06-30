// !Apa itu Regex
// ? Regular Expression atau disebut juga Regex / Regexp adalah deretan karakter spesial yang menggambarkan pattern atau pola untuk pencarian teks pada sebuah string atau document.

// !Regex = Text matching.

// **Kapan sih kita harus menggunakan regex?

// Validasi input dari sebuah form
// Mencari keyword tertentu pada email atau halaman website
// Mencari IP address dalam kisaran tertentu
// Dan masih banyak lagi

//  2 type regex
//regex literal
const namaVariable = /pola/

// regexExp
const namaVariable1 = new RegExp("pola");

// ? Lalu apa perbedannya?
// **Dengan menggunakan regex literal, kita dapat meningkatkan performa karena akan selalu tetap constant,

// **sedangkan fungsi RegExp bisa digunakan untuk pola yg dinamis, misalnya pola didapat dari user input atau dari hasil manipulasi string, akan tetapi kekurangannya akan di-compile dan dijalankan terus saat program dijalankan kembali.

// !Method pada Regex

// !.exec()
// ?Digunakan untuk mencari string yang kita inginkan pada pola regex yang tersedia dengan mengembalikan nilai array atau null.
const string ='saya suka kopi';
const pattern = /kopi/;
const result = pattern.exec(string);
console.log(result);

// ! .test()

const regex = /Test/;
console.log(regex.test('Test')); // Output: true
 const words = ["Tes", "Tess", "Test"];
 console.log(new RegExp(words[2]).test('Test')); 
 // Output: true
// !Contoh jika string yang dicari tidak ditemukan:

const words1 = ["Tes", "Tess", "Test"];
console.log(new RegExp(words1[1]).test('Test')); // Output: false


// 1. Membuat variabel string
let string1 = "saya belajar di skilvul.com";

// 2. Membuat variabel pattern dengan regex
let pattern1 = new RegExp("skilvul.com");

// 3. Mencari hasil pencarian regex
let result1= pattern.exec(string1);

// 4. Membuat variabel status untuk mengecek keberadaan pola
let status = pattern.test(string1);

// 5. Menampilkan hasil di console
console.log(result1);
console.log(status);
