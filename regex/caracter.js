// ! Special Characters
// ? Special character digunakan untuk mencocokkan sebuah pola yang tidak biasa dari suatu string, misalnya ketika mencari nilai true dari pola skill untuk kata Skilvul. Kita bisa menggunakan special character dari regex.

// const kata = 'skilvul';
// const pattern = /skil*l/;
// console.log(pattern.test(kata)); // Output: true

// **notasi * setelah kata skil berfungsi untuk menggantikan karakter apa saja yang muncul setelahnya. * termasuk ke dalam special character dari regex.

// **Ada beberapa kategori di dalam special character regex:

// !Assertions
// Assertions melakukan pencocokan karakter di awal, akhir, serta batasan awal dan akhir dari suatu kata/baris.
// Contoh: ^, $, \b

// !Shorthand Character classes
// Membedakan berbagai jenis karakter. Contoh: membedakan huruf, simbol, dan angka.
// Contoh: \d, \w, \s, \

// !Quantifiers
// Menunjukkan jumlah karakter atau ekspresi yang cocok.
// Contoh: *, +, ?

// !roups and ranges
// Menunjukkan grup dan range dari suatu ekspresi.
// Contoh: x|y, [xyz], [^xyz]

// !Unicode property escapes
// Membedakan berdasarkan karakter unicode, misalnya, huruf besar dan kecil, simbol matematika, dan tanda baca.
// Contoh: \p, \P


const kata1 = "Saya belajar JavaScript di Skilvul.com";
const pattern1 = /belajar/;
const result = pattern1.exec(kata1); 
const test = pattern1.test(kata1);

console.log(result);
console.log(test);
