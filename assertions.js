// !Assertions

// ? Assertion digunakan untuk mencocokan karakter yang terdapat dalam suatu kata/kalimat.

// ** Beberapa karakter spesial yang sering digunakan dalam assertion adalah:

// ^: Digunakan untuk **mencocokkan awal **dari suatu string. Karakter spesial ini berbeda penggunaannya ketika digunakan dalam kategori Group and Ranges.
// $: Digunakan untuk **mencocokkan akhir **dari suatu string.
// \b: Digunakan untuk memberi batasan dari suatu string. Huruf karakter sesudah karakter spesial ini harus tidak diikuti oleh huruf karakter lain.
// x(?=y) (lookahead): Hasilnya akan berupa 'x' hanya jika setelah 'x' diikuti oleh 'y' tanpa spasi.
// (?<=y)x (lookbehind): Hasilnya akan berupa 'x' hanya jika sebelum 'x' adalah 'y' tanpa spasi.

// !Contoh penggunaan karakter spesial ^:
const regex = /^I/g;
const word = "Indonesia";
console.log(word.match(regex)); // Output: ['I']
const regex1 = /^i/g;
const word1= "Indonesia";
console.log(word.match(regex1)); // Output: null
// !Contoh penggunaan karakter spesial $:
const regex2 = /a$/g;
const word2= "Indonesia";
console.log(word2.match(regex2)); // Output: ['a']
const regex3 = /A$/g;
const word3 = "Indonesia";
console.log(word3.match(regex3)); // Output: null
// !Contoh penggunaan karakter spesial \b:
const regex4 = /ee\b/gi;
const word4 = "Tree";
console.log(word4.match(regex4)); // Output: ['ee']
// !Contoh di atas akan menghasilkan array ['ee'] karena tidak ada lagi huruf setelah kata ee.
const regex5 = /oo\b/gi;
const word5 = "Moon";
console.log(word5.match(regex5)); // Output: null
// **Kode di atas akan menghasilkan null karena masih ada huruf n dalam kalimat Moon.

// !Contoh penggunaan x(?=y) (lookahead):
const regex6 = /Moon(?=Child)/
const word6 = "MoonChild"
console.log(word6.match(regex6)); // Output: ["Moon"]

const regex7 = /Moon(?=Child)/
const word7 = "Moon child"
console.log(word7.match(regex7)); // Output: null
// !Contoh penggunaan (?<=y)x (lookbehind):
const regex8 = /(?<=Jekyll)Hyde/
const word8 = "JekyllHyde"
console.log(word8.match(regex8)); // Output: ["Hyde"]

const regex9 = /(?<=Jekyll)Hyde/
const word9 = "HydeJekyll"
console.log(word9.match(regex9)); // Output: null