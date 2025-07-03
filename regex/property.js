// ! Unicode Property Escapes

// ? Unicode property escapes digunakan untuk membedakan berdasarkan karakter unicode misalnya, huruf besar kecil, simbol matematika, dan tanda baca. Contoh: \p, \P.

// * Karakter yang digunakan dalam unicode property escapes ini adalah:

// Karakter ** \p**

// ^ Ada 2 jenis penggunaan \p ini, yaitu:

// ! Non-binary values

// ? \p{UnicodePropertyValue} atau \p{UnicodePropertyName=UnicodePropertyValue} dimana UnicodePropertyName terdiri dari General_Category (gc), Script (sc), Script_Extensions (scx), sedangkan untuk UnicodePropertyValue terdiri dari: Letter (L), Symbol (S), Separator (Z), Number (N), dan lain sebagainya.

// ! 📝  Catatan:

//! Regular expression unicode property \p{...} hanya bisa dilakukan dengan diikuti flag u di akhir pola.

// ^ Contoh penggunaan \p{UnicodePropertyName=UnicodePropertyValue}:

// const regex = /\p{General_Category=Letter}/gu;
// const word = "Skilvul";
// console.log(word.match(regex));

const regex1 = /\p{Script=Latin}/gu;
const word1 = "Skilvul";
console.log(word1.match(regex1));

// Lalu berikut contoh penggunaan /\p{Script_Extensions=Hira}/gu:

const regex2 = /\p{Script_Extensions=Hira}/gu;
const word2 = "あ";
console.log(word2.match(regex2));

// ^ Berbeda dengan Script, Script_Extensions kebanyakan digunakan untuk simbol-simbol bahasa.

//  ! Binary & non-binary values

// ? UnicodeBinaryPropertyName sering digunakan untuk kode ASCII (American Standard Code for Information Interchange)

// & Contoh penggunaan {UnicodeBinaryPropertyName}:

const regex3 = /\u0024/gu;
const word3 = "PS5seharga $499";
console.log(word3.match(regex3));


// ! Karakter ** \P**

// Seperti karakter pada topik-topik sebelumnya, \P adalah negasi dari \p.

// ^ Contoh penggunaan \P:


const regex4 = /\P{General_Category=Letter}/gu;
const word4 = "Skilvul";
console.log(word4.match(regex4)); // Output: null

const regex5 = /\P{scx=Hira}/gu;
const word5 = "あ";
console.log(regex5.test(word5)); // Output: false


// tugas
const regex = /\p{N}/gu;
const word = "Skilvul123"
console.log(word.match(regex));