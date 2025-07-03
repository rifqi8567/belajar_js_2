// ! Shorthand Character Classes

// ^Shorthand Character Classes pada umumnya digunakan untuk membedakan huruf dan angka, namun bisa juga dipakai untuk membedakan karakter lainnya (karakter spesial).

// **Beberapa karakter spesial yang sering digunakan dalam character classes adalah:
// ^.: Digunakan untuk menggantikan karakter apapun.
// ^\d: Digunakan untuk mencocokkan semua angka (digit). Karakter spesial ini sama dengan [0-9]
// ^\D: Adalah negasi dari \d. Digunakan untuk mencocokkan karakter selain angka. Karakter spesial ini sama dengan ^[0-9]
// &\w: Digunakan untuk mencocokkan semua huruf dan angka termasuk dengan garis bawah (_). Karakter spesial ini sama dengan [A-Za-z0-9_].
// *\W: Adalah negasi dari \w. Digunakan untuk mencocokkan karakter selain huruf, angka dan underscore. Karakter spesial ini sama dengan [^A-Za-z0-9_].
// &\s: Digunakan untuk mencocokkan semua white space karakter, termasuk di dalamnya spasi dan tab.
// ^\S: Adalah negasi dari \s. Digunakan untuk mencocokkan karakter selain spasi dan tab.
// ~\: Untuk mengindikasikan karakter huruf yang diikuti spesial karakter seperti ?[]()\/|$^*.+, baik di awal, di tengah, ataupun di akhir sebuah kata. Misalnya, terdapat kata abc*, maka kita harus menambahkan \ di depan karakter *, sehingga pola regex yang dibuat adalah /abc\*/.



// !Contoh penggunaan .:
const regex = /.o/gi;
const word = "Indonesia";
console.log(word.match(regex)); // Output: ['do']
// ^Kode di atas akan menghasilkan array ['do'] , karena huruf sebelum karakter o yang digantikan . adalah karakter d.

// !Contoh penggunaan \d:
const regex1 = /\d/gi;
const words1 = "PS5 seharga $499";
console.log(words1.match(regex1)); // Output: ["5", "4", "9", "9"]
// ^Kode di atas menghasilkan array ["5", "4", "9", "9"], karena akan mencocokkan karakter digit yang ada pada variabel word.

// !Contoh penggunaan \D:
const regex2 = /\D/gi;
const word2 = "PS5 seharga $499";
console.log(word2.match(regex2)); // Output: ["P", "S", " ", "s", "e", "h", "a", "r", "g", "a", " ", "$"]
// ^Kode di atas menghasilkan array ["P", "S", " ", "s", "e", "h", "a", "r", "g", "a", " ", "$"], karena akan mencocokkan karakter selain digit yang ada pada variabel word.

// !Contoh penggunaan \w:
const regex3 = /\w/gi;
const word3 = "PS5 seharga $499";
console.log(word3.match(regex3)); // Output: ["P", "S", "5" "s", "e", "h", "a", "r", "g", "a", "4", "9", "9"]
// ^Kode di atas menghasilkan array ["P", "S", "5" "s", "e", "h", "a", "r", "g", "a", "4", "9", "9"], karena akan mencocokkan karakter huruf dan digit yang ada pada variabel word.

// !Contoh penggunaan \W:
const regex4 = /\W/gi;
const word4 = "PS5 seharga $499";
console.log(word4.match(regex4)); // Output: [" ", " ", "$"]
// ^Kode di atas menghasilkan array [" ", " ", "$"], karena akan mencocokkan karakter selain huruf dan digit yang ada pada variabel word.

// !Contoh penggunaan \s:
const regex5 = /\s/gi;
const word5 = "Indonesia Raya";
console.log(word5.match(regex5)); // Output: [" "]
// ^Kode di atas menghasilkan array [" "], karena akan mencocokkan karaketer whitespace yang ada pada variabel word.

// !Contoh penggunaan \S:
const regex6 = /\S/gi;
const word6 = "Indonesia Raya";
console.log(word6.match(regex6)); // Output: ["Indonesia", "Raya"]
// ^Kode di atas menghasilkan array ["Indonesia", "Raya"], karena akan mencocokkan karaketer selain whitespace yang ada pada variabel word.

// !Contoh penggunaan \:
const regex7 = /halo\?/gi;
const word7 = "halo?";
console.log(word7.match(regex7)); // Output: ["halo?"]
// ^Kode di atas menghasilkan array ["halo?"], karena akan mencocokkan karaketer spesial yang ada pada variabel word.



const word9 = 'Saya sudah belajar selama 2 bulan 3 minggu di Skilvul.com';
const regex9 = /\d/gi;

console.log(word9.match(regex9));

const word8 = 'Saya sangat menginginkan PS5 dari 2 bulan yang lalu';
const regex8 = /\W\d/gi;

console.log(word8.match(regex8));